import { IconButton } from "../components/icon-button";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import {
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { RESPONSECONVERSATION } from "../constants/constant";
import { autoGrowTextArea } from "../utils";

import { TConversation } from "../types/consultant";

interface IAditionalInfo {
  allQuestionAnswered: () => void;
}

const AdditionalInformations = ({ allQuestionAnswered }: IAditionalInfo) => {
  const [responses, setResponses] = useState(RESPONSECONVERSATION);
  const [openEditAnswerFor, setOpenEditAnswerFor] = useState("");
  const [answerInput, setAnswerInput] = useState("");
  const [answerInputUpdate, setAnswerInputUpdate] = useState("");
  const [inputRows, setInputRows] = useState(1);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleEnableEditModeFor = (response: TConversation) => {
    setOpenEditAnswerFor(response.id);
    setAnswerInputUpdate(response.answer ?? "");
  };
  const handleDisableEditModeFor = () => {
    setOpenEditAnswerFor("");
    setAnswerInputUpdate("");
  };

  const onInputKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    value: string,
    response: TConversation
  ) => {
    if (e.key !== "Enter") return false;
    if (e.key === "Enter" && e.nativeEvent.isComposing) return false;
    if (e.altKey || e.ctrlKey || e.shiftKey) {
      doSubmit(response, value);
      e.preventDefault();
    }
  };

  const onInput = (text: string) => {
    setAnswerInput(text);
  };

  const doSubmit = (response: TConversation, answer: string) => {
    if (answer.trim() === "") return;
    const data = { ...response, answer: answer };
    const result = [...responses].flatMap((res) =>
      res.id === data.id ? { ...res, ...data } : res
    );
    setResponses(result);
    handleDisableEditModeFor();
  };

  const measure = useDebouncedCallback(
    () => {
      const rows = inputRef.current ? autoGrowTextArea(inputRef.current) : 1;
      const inputRows = Math.min(20, Math.max(1, rows));
      setInputRows(inputRows);
    },
    100,
    {
      leading: true,
      trailing: true,
    }
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(measure, [answerInput]);
  useEffect(() => {
    setInputRows(1);
  }, [responses]);

  useEffect(() => {
    if (responses.every((key) => key.answer)) {
      allQuestionAnswered();
    }
  }, [responses]);

  return (
    <>
      <h3
        className="text-sm text-content-accent-hover font-semibold mb-1 "
        onClick={() => console.log({ responses })}
      >
        Additional information:
      </h3>
      <div className='flex flex-col gap-6 mb-6'>
        {responses.map((response, index) => (
          <div className='flex flex-col text-xs leading-5 gap-2'>
            <div className='flex gap-1'>
              <span className='block min-w-[72px] text-content-grey-600 font-semibold'>{`Question ${index + 1}`}</span>
              <span className='block text-content-black'>{response.question}</span>
            </div>

            {openEditAnswerFor === response.id || !response.answer ? (
              <div className='flex items-center'>
                {!response.answer && (
                  <>
                    <div className='flex flex-1 relative items-center'>
                      <textarea
                        ref={inputRef}
                        className={`w-full border py-[7px] pr-[60px] pl-5 rounded-[40px] resize-none outline-none 
                            focus:border-content-black custom-scrollbar-thumb`}
                        placeholder='Provide an answer here...'
                        onInput={(e) => setAnswerInput(e.currentTarget.value)}
                        value={answerInput}
                        onKeyDown={(e) => onInputKeyDown(e, answerInput, response)}
                        rows={inputRows}
                        autoFocus={true}
                      />
                      <span className='text-content-grey-400 text-xs absolute right-3'>{`${answerInput.length}/300`}</span>
                    </div>
                    <IconButton
                      className='!p-2'
                      variant='primary'
                      disabled={!answerInput}
                      onClick={() => doSubmit(response, answerInput)}
                    >
                      <PaperAirplaneIcon className='w-5 h-5 text-white' />
                    </IconButton>
                  </>
                )}
                {openEditAnswerFor === response.id && (
                  <>
                    <div className='flex flex-1 relative items-center'>
                      <textarea
                        ref={inputRef}
                        className={`w-full border py-[7px] pr-[60px] pl-5 rounded-[40px] resize-none outline-none 
                            focus:border-content-black custom-scrollbar-thumb`}
                        placeholder='Provide an answer here...'
                        onInput={(e) => setAnswerInputUpdate(e.currentTarget.value)}
                        value={answerInputUpdate}
                        onKeyDown={(e) => onInputKeyDown(e, answerInputUpdate, response)}
                        rows={inputRows}
                        autoFocus={true}
                      />
                      <span className='text-content-grey-400 text-xs absolute right-3'>{`${answerInputUpdate.length}/300`}</span>
                    </div>
                    <IconButton
                      className='!p-2'
                      variant='primary'
                      disabled={!answerInputUpdate}
                      onClick={() => doSubmit(response, answerInputUpdate)}
                    >
                      <PaperAirplaneIcon className='w-5 h-5 text-white' />
                    </IconButton>
                  </>
                )}
              </div>
            ) : (
              <div className='flex gap-2'>
                <div className='flex gap-1'>
                  <span className='block min-w-[72px] text-content-grey-600 font-semibold'>{`Answer ${
                    index + 1
                  }`}</span>
                  <span className='block text-content-black'>{response.answer}</span>
                  <IconButton className='shrink-0 h-4 !p-0'>
                    <PencilSquareIcon
                      className='w-4 h-4 text-content-black'
                      onClick={() => handleEnableEditModeFor(response)}
                    />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default AdditionalInformations;
