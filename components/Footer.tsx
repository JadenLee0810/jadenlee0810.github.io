import { LocationIcon } from './icons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2F2F2] text-[14px] text-[#70757A] dark:bg-[#171717] dark:text-[#9AA0A6]">
      <div className="flex items-center gap-2 px-[30px] py-[15px]">
        <LocationIcon label="Location" className="h-4 w-4 shrink-0" />
        Berkeley, California
      </div>
    </footer>
  );
}
