import { useState, useCallback, memo } from "react";
import { Menu, MenuButton } from "@headlessui/react";
import dynamic from "next/dynamic";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { getFromStorage } from "@/hooks/comman";
import { useSelector } from "react-redux";
import { selectcitydata } from "@/app/store/slices/citySlice";
import { usePathname } from "next/navigation";
const DynamicLocationpopup = dynamic(
  () => import("@/app/components/popup/Locationpopup"),
  {
    ssr: false,
  }
);

function Locationdata() {
  const pathname = usePathname();

  const city = useSelector(selectcitydata);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton
          onClick={handleOpen}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        >
          {pathname === "/"
            ? "Select your Location"
            : city
            ? city?.city
            : "Select your Location"}{" "}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </Menu>
      {open === true && (
        <DynamicLocationpopup
          setOpen={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
export default memo(Locationdata);
