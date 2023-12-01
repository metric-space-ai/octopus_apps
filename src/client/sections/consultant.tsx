import { useEffect, useState } from "react";
import classNames from "classnames";

import {
  ArrowPathIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { QUESTION_STEPS } from "../constants/constant";
import { IconButton } from "../components/icon-button";
import AdditionalInformations from "./aditionalInfo";
import { Button } from "../components/button";

interface IConsult {}
export const Consultant = ({}: IConsult) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [step, setStep] = useState(QUESTION_STEPS.ASK);

  const [disclosure, setDisclosure] = useState("");
  const [question, setQuestion] = useState("");

  const [shouldUpdate, setShouldUpdate] = useState({
    question: false,
    disclosure: false,
  });

  const handleShowEditMode = (fieldName: keyof typeof shouldUpdate) => {
    setShouldUpdate((prev) => ({ ...prev, [fieldName]: true }));
  };
  const handleAskFirstQuestion = () => {
    setStep(QUESTION_STEPS.ANSWER);
    setIsUpdated(true);
  };
  const checkUpdateButtonDisabled = (obj: object) =>
    (Object.keys(obj) as Array<keyof typeof obj>).every((key) => !obj[key]);

  const handleUpdateInformation = () => {
    setShouldUpdate({ disclosure: false, question: false });
  };

  const allQuestionIsAnswered = () => {
    setStep(QUESTION_STEPS.FACTS);
  };

  useEffect(() => {
    if (step === QUESTION_STEPS.FACTS) {
      const countdown = () => {
        setStep(QUESTION_STEPS.CREATE_CONSULTATION);
        console.log("QUESTION_STEPS.CREATE_CONSULTATION");
      };
      setTimeout(countdown, 5000);
    }
    if (step === QUESTION_STEPS.CREATE_CONSULTATION) {
      const countdown = () => {
        setStep(QUESTION_STEPS.CONSULTATION);
        console.log("QUESTION_STEPS.CONSULTATION");
      };
      setTimeout(countdown, 5000);
    }
    console.log(`QUESTION_STEPS...${step}`);
  }, [step]);

  return (
    <div
      className={`flex flex-col bg-white py-4 px-5 w-full lg:h-[600px] rounded-20 relative `}
    >
      <div className="flex justify-between mb-4">
        <h1
          className="text-content-black font-semibold text-xl leading-7"
          onClick={() => {
            console.log({ step });
            setStep((prev) => prev - 1);
          }}
        >
          Law consultant
        </h1>
        <IconButton
          className="ml-auto !p-1"
          onClick={() => {
            console.log({ step });
            setStep((prev) => prev + 1);
          }}
        >
          <XMarkIcon className="w-5 h-5 text-content-black" />
        </IconButton>
      </div>
      <div className={`flex flex-col lg:flex-row gap-4 flex-grow mb-5`}>
        <div className="flex flex-col flex-1">
          <div
            className={classNames(`mb-4 custom-scrollbar-thumb flex-1`, {
              "max-h-[435px]": step === QUESTION_STEPS.ANSWER,
              "max-h-[420px]":
                step === QUESTION_STEPS.FACTS ||
                step === QUESTION_STEPS.CREATE_CONSULTATION,
              "max-h-[282px]": step > QUESTION_STEPS.CREATE_CONSULTATION,
            })}
          >
            <div className="flex flex-col mb-4">
              <h2 className="text-sm text-content-accent-hover font-semibold mb-1 ">
                Self-disclosure:
              </h2>
              {step === QUESTION_STEPS.ASK || shouldUpdate.disclosure ? (
                <label className="flex flex-col relative">
                  <span className="text-xs text-content-black font-poppins-regular mb-3">
                    Provide details of the problem you are experiencing in the
                    chat
                  </span>
                  <textarea
                    rows={6}
                    maxLength={1000}
                    onInput={(e) => setDisclosure(e.currentTarget.value)}
                    value={disclosure}
                    className="bg-content-grey-100 rounded-20 resize-none outline-none focus:border-content-black pt-2 pb-4 px-4"
                  />
                  <span className="text-content-grey-400 text-xs leading-5 absolute right-4 bottom-2">{`${disclosure.length}/1000`}</span>
                </label>
              ) : (
                <div className="flex justify-between gap-2">
                  <p className="text-xs leading-5 text-content-black">
                    {disclosure}
                  </p>
                  <IconButton
                    className="shrink-0 h-5 !p-0"
                    onClick={() => handleShowEditMode("disclosure")}
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </IconButton>
                </div>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <h2 className="text-sm text-content-accent-hover font-semibold mb-1 ">
                Core-questions:
              </h2>
              {step === QUESTION_STEPS.ASK || shouldUpdate.question ? (
                <label className="flex flex-col relative">
                  <span className="text-xs text-content-black font-poppins-regular mb-3">
                    Provide details on how I can help you?
                  </span>
                  <textarea
                    rows={6}
                    value={question}
                    onInput={(e) => setQuestion(e.currentTarget.value)}
                    className="bg-content-grey-100 resize-none outline-none focus:border-content-black rounded-20 pt-2 pb-4 px-4"
                  />
                  <span className="text-content-grey-400 text-xs leading-5 absolute right-4 bottom-2">{`${question.length}/1000`}</span>
                </label>
              ) : (
                <div className="flex justify-between gap-2">
                  <p className="text-xs leading-5 text-content-black">
                    {question}
                  </p>
                  <IconButton
                    className="shrink-0 h-5 !p-0"
                    onClick={() => handleShowEditMode("question")}
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </IconButton>
                </div>
              )}
            </div>
            {step !== QUESTION_STEPS.ASK && (
              <AdditionalInformations
                allQuestionAnswered={allQuestionIsAnswered}
              />
            )}
          </div>
          {step === QUESTION_STEPS.FACTS && (
            <p className="flex text-content-accent-hover text-xs font-semibold">
              Thank you for sharing the information. I am gathering crucial
              information into facts...
            </p>
          )}
          {step === QUESTION_STEPS.CREATE_CONSULTATION && (
            <p className="flex text-content-accent-hover text-xs font-semibold">
              I am creating an initial consultation...
            </p>
          )}
        </div>
        {step >= QUESTION_STEPS.FACTS && (
          <div
            className={`flex flex-col flex-1 max-w-[260px] w-full bg-content-grey-900 text-content-grey-100 px-4 py-3 rounded-20 custom-scrollbar-thumb ${
              step === QUESTION_STEPS.CONSULTATION ? "max-h-[282px]" : ""
            }`}
          >
            <h3 className=" font-semibold mb-3 text-sm">Facts:</h3>
            {step > QUESTION_STEPS.FACTS && (
              <p className="text-xs leading-5">
                {` The buyer purchased a used vehicle from a dealer on May 15, 2019. The dealer verbally assured that the
          vehicle was in perfect condition, which can also be confirmed by a witness. `}
                <br />
                <br />
                {` After about six months and
          around 10,000 kilometers driven, a significant engine fault occurred.`}
                <br />
                <br />
                {` A workshop report confirms this
          fault. The buyer has only verbally asked the dealer to cover the repair costs so far. There is an invoice
          as well as a service history of the car.`}
              </p>
            )}
          </div>
        )}
      </div>
      {step === QUESTION_STEPS.CONSULTATION && (
        <div className="flex flex-col py-4 px-5 bg-content-grey-100 rounded-20 lg:h-[170px] overflow-auto custom-scrollbar-thumb mb-3">
          <h3 className="text-content-accent-hover text-sm font-semibold mb-2">
            Initial consulting
          </h3>
          <p className="text-xs">
            Although verbal agreements are in principle binding, proof is often
            problematic. However, in your case, you have a witness, which could
            strengthen your position. According to German contract law,
            specifically the law of sales, the seller is generally liable for
            defects that already existed at the time of sale. Due to the
            temporal proximity between the purchase and the occurrence of the
            engine fault, as well as the low mileage, it could be argued that
            the defect already existed at the time of purchase.
            <br />
            <br />
            However, it will depend on how exactly the ‘warranty’ was verbally
            formulated and whether it can be considered binding. It would be
            advisable to formally request in writing that the dealer fix the
            defect within a set deadline. Should the dealer not comply, legal
            steps could be initiated. Considering the complexity, it would be
            sensible to plan further legal steps together.
          </p>
        </div>
      )}
      <div className="h-9">
        {step === QUESTION_STEPS.ASK && (
          <Button
            title="Continue"
            disabled={!disclosure || !question}
            onClick={handleAskFirstQuestion}
            className="rounded-[40px] w-[220px] !h-9"
          />
        )}
        {step === QUESTION_STEPS.ANSWER && (
          <Button
            title="Update information"
            disabled={checkUpdateButtonDisabled(shouldUpdate)}
            onClick={handleUpdateInformation}
            className="rounded-[40px] w-[220px] !h-9"
            iconBefore={<ArrowPathIcon className="w-5 h-5 text-white" />}
          />
        )}
        {step >= QUESTION_STEPS.FACTS && (
          <Button
            title="Update information"
            disabled={checkUpdateButtonDisabled(shouldUpdate)}
            // onClick={handleUpdateInformation}
            className="rounded-[40px] w-[220px] !h-9 "
            iconBefore={<ArrowPathIcon className="w-5 h-5 text-white" />}
          />
        )}
      </div>
    </div>
  );
};
