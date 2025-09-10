import React from "react";

export default function ProgressIndicator({
  questionNumber,
  totalQuestions,
}: {
  questionNumber: number;
  totalQuestions: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-xs font-semibold">
          {`Question ${questionNumber} of ${totalQuestions}`}
        </p>
      </div>
      {/* <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div> */}
    </div>
  );
}
