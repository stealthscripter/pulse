import { useComputerSelectionStore } from "../store/useComputerSelectionStore";
import { useUserSelectionStore } from "../store/useUserSelectionStore";

function HeaderSide() {
  const { userPick } = useUserSelectionStore();
  const { computerPick } = useComputerSelectionStore();

  return (
    <div className="flex flex-col items-center mb-8 md:mb-0">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Ultimate Battle
      </h1>
      {!userPick || !computerPick ? (
        <p className="text-sm md:text-base lg:text-lg">
          Waiting for selections...
        </p>
      ) : (
        <p className="text-sm md:text-base lg:text-lg">Ready to Battle</p>
      )}
    </div>
  );
}

export default HeaderSide;
