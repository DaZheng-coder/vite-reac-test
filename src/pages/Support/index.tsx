import Header from "../Home/Header";
import AIKnowledge from "./AIKnowledge";
import Cases from "./Cases";
import Classes from "./Classes";
import Process from "./Process";
import ProjectDeliver from "./ProjectDeliver";
import Quality from "./Quality";
import Solution from "./Solution";
import SuccessCases from "./SuccessCases";
import SuccessCasesView from "./SuccessCasesView";

const Support = () => {
  return (
    <div className="mt-[64px]">
      <AIKnowledge />
      <Classes />
      <Cases />
      <Solution />
      <Process />
      <SuccessCases />
      <ProjectDeliver />
      <Quality />
      <SuccessCasesView />
    </div>
  );
};

export default Support;
