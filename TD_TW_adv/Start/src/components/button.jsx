import { cva } from "class-variance-authority";

// Base definition
const base = "flex gap-2 font-button font-bold italic rounded text-button-text text-center justify-center items-center uppercase";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-button-bg",
        "hover:bg-button-hover",
      ],
      secondary: [
        "bg-button-secondary-bg",
        "hover:bg-button-secondary-hover",
      ],
       
      infos: [
        "bg-button-secondary-bg",
        "hover:bg-button-info-hover",
        "hover:opacity-70",
        "font-button-secondary",
        "normal-case",
        "not-italic",
        "lg:w-fit",
        "text-sm",

      ],
    },
    size: {
      small: ["text-xs", "p-2", "w-fit"],
      medium: ["text-base", "py-2", "px-4"],

    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Ex3_2() {
  return (
    <div className="flex flex-col h-screen gap-2 bg-black">
      <Button intent="primary">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" role="img" >
            <path fill="#ffffff" d="m50.395 15.917-4.06 22.168a4.474 4.474 0 0 1-4.141 3.673l-.247.006h-23.74a4.47 4.47 0 0 1-4.328-3.4l-.053-.24-4.38-22.807a.64.64 0 0 0-.513-.51l-.112-.01H5.17v-3.852h3.65a4.47 4.47 0 0 1 4.328 3.4l.053.24 4.38 22.807c.05.264.258.464.514.51l.112.01h23.74c.269 0 .504-.17.596-.416l.03-.11 4.061-22.168 3.761.7z"></path>
            <path fill="#ffffff" d="M28.104 9.448v12.594l-5.061-5.022-2.723 2.703 9.71 9.64 9.708-9.64-2.724-2.703-5.059 5.022V9.448z" ></path>
          </svg>
        </span>
        <span>S'abonner</span>
      </Button>
      <Button intent="secondary">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 85 85" role="img">
            <path fill="#ffffff" d="m73.5 45-57 36.4V8.7z"></path>
          </svg>
        </span>
        <span>Lecture</span>
      </Button>
      <Button intent="infos">
        <span>Plus d'infos</span>
      </Button>
      <Button intent="primary" size="small" className="rounded-sm">
        <span>S'abonner</span>
      </Button>
      <Button intent="primary" size="small" className="rounded-sm p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="23" height="23"class="UserMenuMyCanal__button__icon___MP5vT"><path fill="#fff" d="m22 7.457-1.876 10.457c-.173.967-.968 1.679-1.913 1.732l-.114.003H7.131c-.95 0-1.77-.666-2-1.603l-.024-.114L3.084 7.174a.3.3 0 0 0-.237-.24l-.052-.005H1.109V5.112h1.686c.95 0 1.77.666 2 1.604l.024.113 2.023 10.758c.023.124.12.219.237.24l.052.005h10.966c.125 0 .233-.08.276-.196l.014-.052 1.875-10.456z"></path><path fill="#fff" d="M13.468 4.347v7.269h-1.767V4.347z"></path><path fill="#fff" d="m15.788 7.945 1.25 1.285-4.453 4.58-4.453-4.58 1.25-1.285 3.203 3.295z"></path></svg>
      </Button>
      <Button intent="secondary" size="small" className="rounded-sm">
        <span>J'en profite</span>
      </Button>
      <Button intent="primary" className="w-fit">
        <span>Découvrir nos offres</span>
      </Button>
    </div>


  );
}
