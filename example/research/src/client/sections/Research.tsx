import React, { useState } from "react";
import { Button, IconButton } from "../components/buttons";

import {
  PencilSquareIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ResearchItemRow from "./ResearchItemRow";
import {
  EXAMPLES,
  KEYWORDSCOLLECTION,
  RESEARCHRESULTS,
  RESEARCHSTEPS,
} from "../constants";
import { IExamples, IKeyword, IResearchResult } from "../types";
import { AddDefinitionModal } from "../components/AddDefinitionModal";

type Props = {};

const Research = (props: Props) => {
  const [definitionsCollection, setKeywordsCollection] =
    useState(KEYWORDSCOLLECTION);
  const [researchSteps, setResearchSteps] = useState(
    RESEARCHSTEPS.Specification
  );
  const [examplesResults, setExamplesResults] = useState<IExamples[]>(EXAMPLES);
  const [researchResults, setResearchResults] =
    useState<IResearchResult[]>(RESEARCHRESULTS);

  const [definitionTitleOnEditMode, setKeywordTitleOnEditMode] = useState({
    id: "",
    title: "",
  });
  const [addNewKeywordCategoryId, setAddNewKeywordCategoryId] = useState("");
  const [editKeywordsTitle, setEditKeywordsTitle] = useState("");
  const [openEditKeywordvalue, setOpenEditKeywordValue] = useState({
    id: "",
    parentId: "",
  });
  const [editKeywordsValue, setEditKeywordsValue] = useState("");
  const [addKewordModal, setAddKewordModal] = useState(false);
  const [addDefinitionType, setAddDefinitionType] = useState<"in" | "out" | "">(
    ""
  );

  const handleCloseAddDefinitionModal = () => {
    setAddKewordModal(false);
    setAddDefinitionType("");
  };

  const handleAddNewKeyWord = (definition: string) => {
    const result = definitionsCollection.flatMap((collection) =>
      collection.id === addNewKeywordCategoryId
        ? addDefinitionType === "in"
          ? {
              ...collection,
              definitions_in: [
                ...collection.definitions_in,
                {
                  definitionId: (
                    Math.floor(Math.random() * 9999) + 1000
                  ).toString(),
                  value: definition,
                },
              ],
            }
          : {
              ...collection,
              definitions_out: [
                ...collection.definitions_out,
                {
                  definitionId: (
                    Math.floor(Math.random() * 9999) + 1000
                  ).toString(),
                  value: definition,
                },
              ],
            }
        : collection
    );

    setKeywordsCollection(result);
    setAddNewKeywordCategoryId("");
    setAddKewordModal(false);
  };

  const addKeywordTitleToEditMode = (id: string, title: string) => {
    setKeywordTitleOnEditMode({ id, title });
    setEditKeywordsTitle(title);
  };
  const clearKeywordTitleToEditMode = () => {
    setKeywordTitleOnEditMode({ id: "", title: "" });
    setEditKeywordsTitle("");
  };

  const handleOpenEditKeywordValue = (
    definition: IKeyword,
    parentId: string
  ) => {
    setEditKeywordsValue(definition.value);
    setOpenEditKeywordValue({ id: definition.definitionId, parentId });
  };

  const handleCloseEditKeywordValue = () => {
    setEditKeywordsValue("");
    setOpenEditKeywordValue({ id: "", parentId: "" });
  };

  const submitChangeKeywordsDirectKeywordValue = () => {
    if (!editKeywordsValue) return;
    const result = definitionsCollection.flatMap((item) =>
      item.id === openEditKeywordvalue.parentId
        ? {
            ...item,
            definitions_in: [
              ...item.definitions_in.flatMap((definition) =>
                definition.definitionId === openEditKeywordvalue.id
                  ? { ...definition, value: editKeywordsValue }
                  : definition
              ),
            ],
            definitions_out: [
              ...item.definitions_out.flatMap((definition) =>
                definition.definitionId === openEditKeywordvalue.id
                  ? { ...definition, value: editKeywordsValue }
                  : definition
              ),
            ],
          }
        : item
    );
    setKeywordsCollection(result);
    handleCloseEditKeywordValue();
  };

  const submitChangeKeywordsTitle = () => {
    if (!editKeywordsTitle) return;
    const result = definitionsCollection.flatMap((item) =>
      item.id === definitionTitleOnEditMode.id
        ? { ...item, title: editKeywordsTitle }
        : item
    );
    console.log({ result, definitionsCollection });
    setKeywordsCollection(result);
    clearKeywordTitleToEditMode();
  };
  const checkEnterKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col rounded-20 bg-content-white px-5 pb-5 pt-4">
        <h1 className="text-xl leading-7 font-semibold text-content-black mb-3">
          Research application
        </h1>
        <div className="flex flex-col">
          {researchSteps === RESEARCHSTEPS.Specification && (
            <>
              <h2 className="font-semibold text-sm leading-5 mb-1 text-content-accent-hover">
                Proposed specification
              </h2>
              <p className="text-xs leading-5 text-content-black mb-4">
                Check and edit proposed specification of the AI
              </p>
            </>
          )}
          {researchSteps === RESEARCHSTEPS.Examples && (
            <>
              <h2 className="font-semibold text-sm leading-5 mb-1 text-content-accent-hover">
                Search examples
              </h2>
              <p className="text-xs leading-5 text-content-black mb-3">
                Check Search Examples
              </p>
            </>
          )}

          {researchSteps === RESEARCHSTEPS.ResearchResults && (
            <>
              <h2 className="font-semibold text-sm leading-5 mb-4 text-content-accent-hover">
                List research results
              </h2>
            </>
          )}

          {researchSteps === RESEARCHSTEPS.Specification && (
            <div className="flex flex-col gap-5">
              <div className="custom-scrollbar-thumb h-[402px] flex flex-col gap-4">
                {definitionsCollection.map((elem, elemIndex) => (
                  <div className="flex flex-col gap-3 mb-4" key={elem.id}>
                    {definitionTitleOnEditMode.id === elem.id ? (
                      <div className="flex items-center relative max-w-fit">
                        <input
                          className="text-xs text-content-black pl-2 pr-8 py-1 border-r outline-content-accent rounded-4 bg-content-grey-100"
                          value={editKeywordsTitle}
                          name="definitionsTitle"
                          // defaultValue={editKeywordsTitle}
                          onChange={(e) => setEditKeywordsTitle(e.target.value)}
                          onKeyDown={(e) =>
                            checkEnterKeyPressed(e) &&
                            submitChangeKeywordsTitle()
                          }
                        />
                        <span className="block absolute w-[1px] h-4 bg-content-grey-400 right-8" />
                        <IconButton
                          className="!p-0 absolute right-2"
                          onClick={clearKeywordTitleToEditMode}
                        >
                          <XMarkIcon className="w-4 h-4 text-content-black" />
                        </IconButton>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-xs leading-5 text-content-black">{`${
                          elemIndex + 1
                        }. ${elem.title}`}</h3>
                        <IconButton
                          className="!p-0"
                          onClick={() =>
                            addKeywordTitleToEditMode(elem.id, elem.title)
                          }
                        >
                          <PencilSquareIcon className="w-4 h-4 text-content-black" />
                        </IconButton>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex flex-col">
                        <i className="mb-2 text-content-grey-400 text-xs leading-5">
                          In scope
                        </i>
                        <div className="flex flex-wrap gap-2">
                          {elem.definitions_in.map((definition) => (
                            <div className="flex flex-col">
                              {definition.definitionId ===
                              openEditKeywordvalue.id ? (
                                <div
                                  className="flex items-center relative max-w-fit"
                                  key={definition.definitionId}
                                >
                                  <input
                                    className="text-xs text-content-black pl-2 pr-8 py-1.5 border-r outline-content-accent rounded-4 bg-content-grey-100"
                                    value={editKeywordsValue}
                                    name="definitionsTitle"
                                    // defaultValue={editKeywordsTitle}
                                    onChange={(e) =>
                                      setEditKeywordsValue(e.target.value)
                                    }
                                    onKeyDown={(e) =>
                                      checkEnterKeyPressed(e) &&
                                      submitChangeKeywordsDirectKeywordValue()
                                    }
                                  />
                                  <span className="block absolute w-[1px] h-4 bg-content-grey-400 right-8" />
                                  <IconButton
                                    className="!p-0 absolute right-2"
                                    onClick={handleCloseEditKeywordValue}
                                  >
                                    <XMarkIcon className="w-4 h-4 text-content-black" />
                                  </IconButton>
                                </div>
                              ) : (
                                <div
                                  className="flex items-center px-2 py-1.5 gap-2 bg-content-grey-100 rounded-4"
                                  key={definition.definitionId}
                                >
                                  <span className="text-xs leading-5 text-content-black">
                                    {definition.value}
                                  </span>
                                  <IconButton
                                    className="!p-0"
                                    onClick={() =>
                                      handleOpenEditKeywordValue(
                                        definition,
                                        elem.id
                                      )
                                    }
                                  >
                                    <PencilSquareIcon className="w-4 h-4 text-content-grey-600" />
                                  </IconButton>
                                </div>
                              )}
                            </div>
                          ))}
                          <div
                            className="flex items-center bg-content-grey-100 text-content-accent rounded-4 gap-2 py-1 px-2 
                            cursor-pointer transition-all hover:text-content-accent-hover"
                            onClick={() => {
                              setAddNewKeywordCategoryId(elem.id);
                              setAddKewordModal(true);
                              setAddDefinitionType("in");
                            }}
                          >
                            <span className="text-xs ">Add definition</span>
                            <IconButton className="!p-0">
                              <PlusIcon className="w-4 h-4 text-content-accent" />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <i className="mb-2 text-content-grey-400 text-xs leading-5">
                          Out of scope
                        </i>
                        <div className="flex flex-wrap gap-2">
                          {elem.definitions_out.map((definition) => (
                            <div className="flex flex-col">
                              {definition.definitionId ===
                              openEditKeywordvalue.id ? (
                                <div
                                  className="flex items-center relative max-w-fit"
                                  key={definition.definitionId}
                                >
                                  <input
                                    className="text-xs text-content-black pl-2 pr-8 py-1 border-r outline-content-accent rounded-4 bg-content-grey-100"
                                    value={editKeywordsValue}
                                    name="definitionsTitle"
                                    // defaultValue={editKeywordsTitle}
                                    onChange={(e) =>
                                      setEditKeywordsValue(e.target.value)
                                    }
                                    onKeyDown={(e) =>
                                      checkEnterKeyPressed(e) &&
                                      submitChangeKeywordsDirectKeywordValue()
                                    }
                                  />
                                  <span className="block absolute w-[1px] h-4 bg-content-grey-400 right-8" />
                                  <IconButton
                                    className="!p-0 absolute right-2"
                                    onClick={handleCloseEditKeywordValue}
                                  >
                                    <XMarkIcon className="w-4 h-4 text-content-black" />
                                  </IconButton>
                                </div>
                              ) : (
                                <div
                                  className="flex items-center px-2 py-1 gap-2 bg-content-grey-100 rounded-4"
                                  key={definition.definitionId}
                                >
                                  <span className="text-xs leading-5 text-content-black">
                                    {definition.value}
                                  </span>
                                  <IconButton
                                    className="!p-0"
                                    onClick={() =>
                                      handleOpenEditKeywordValue(
                                        definition,
                                        elem.id
                                      )
                                    }
                                  >
                                    <PencilSquareIcon className="w-4 h-4 text-content-grey-600" />
                                  </IconButton>
                                </div>
                              )}
                            </div>
                          ))}
                          <div
                            className="flex items-center bg-content-grey-100 text-content-accent rounded-4 gap-2 py-1 px-2 
                            cursor-pointer transition-all hover:text-content-accent-hover"
                            onClick={() => {
                              setAddNewKeywordCategoryId(elem.id);
                              setAddKewordModal(true);
                              setAddDefinitionType("out");
                            }}
                          >
                            <span className="text-xs ">Add definition</span>
                            <IconButton className="!p-0">
                              <PlusIcon className="w-4 h-4 text-content-accent" />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5">
                {/* <Button
                title='Back to core-idea'
                variant='outline'
                onClick={() => setResearchSteps((currentStep) => currentStep - 1)}
                className='rounded-[40px] w-[220px] !h-9'
            /> */}
                <Button
                  title="Confirm specification"
                  variant="primary"
                  onClick={() =>
                    setResearchSteps((currentStep) => currentStep + 1)
                  }
                  // onClick={handleGoToScondLevel}
                  className="rounded-[40px] w-[220px] !h-9"
                />
              </div>
            </div>
          )}

          {researchSteps === RESEARCHSTEPS.Examples && (
            <div className="flex flex-col gap-7">
              <div className="custom-scrollbar-thumb max-h-[402px] min-h-[243px] flex flex-col gap-4">
                <div className="flex gap-3 flex-col">
                  <h3 className="font-semibold text-xs leading-5 text-content-black ">
                    Exemplary keywords for searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {examplesResults.map((example) => (
                      <div
                        key={example.id}
                        className="py-1.5 px-2 bg-content-grey-100 rounded"
                      >
                        <p className="text-xs ">{example.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Button
                  title="Back to specification"
                  variant="outline"
                  onClick={() =>
                    setResearchSteps((currentStep) => currentStep - 1)
                  }
                  className="rounded-[40px] w-[220px] !h-9"
                />
                <Button
                  title="Confirm keywords"
                  variant="primary"
                  onClick={() =>
                    setResearchSteps((currentStep) => currentStep + 1)
                  }
                  className="rounded-[40px] w-[220px] !h-9"
                />
              </div>
            </div>
          )}

          {researchSteps === RESEARCHSTEPS.ResearchResults && (
            <div className="flex flex-col gap-5 overflow-hidden">
              <div className="w-full px-0.5 rounded-2xl bg-white custom-scrollbar-thumb max-h-[435px]">
                <div className="flex flex-col min-w-[763px] max-w-[800px] ">
                  <div className="flex mb-2">
                    <div className="w-36">
                      <span className="font-poppins-medium text-xs leading-5 text-content-grey-600">
                        Source name
                      </span>
                    </div>
                    <div className="ml-1 w-36">
                      <span className="font-poppins-medium text-xs leading-5 text-content-grey-600">
                        Source link
                      </span>
                    </div>
                    <div className="ml-1 w-24">
                      <span className="font-poppins-medium text-xs leading-5 text-content-grey-600 ">
                        Quality grade
                      </span>
                    </div>
                    <div className="w-[200px] ml-[5px]">
                      <span className="font-poppins-medium text-xs leading-5 text-content-grey-600">
                        Contained research information
                      </span>
                    </div>
                  </div>
                  {researchResults.map((research) => (
                    <ResearchItemRow
                      key={research.id}
                      researchItem={research}
                      // onInput={onInput}
                      // onInputKeyDown={onInputKeyDown}
                      // doSubmit={doSubmit}
                    />
                  ))}
                </div>
              </div>
              <Button
                title="Back to search examples"
                variant="outline"
                onClick={() =>
                  setResearchSteps((currentStep) => currentStep - 1)
                }
                className="rounded-[40px] w-[220px] !h-9"
              />
            </div>
          )}
        </div>
      </div>

      <AddDefinitionModal
        open={addKewordModal}
        onClose={handleCloseAddDefinitionModal}
        addKeyword={(definition: string) => handleAddNewKeyWord(definition)}
        // addKeyword={(definition: string) => console.log(definition)}
      />
    </>
  );
};

export default Research;
