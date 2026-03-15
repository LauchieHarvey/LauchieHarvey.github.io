import { useEffect, useRef, useState } from "react";

const EnvelopeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
    </svg>
  );
};

const EnvelopeCheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <path d="M64 176C64 149.5 85.5 128 112 128L528 128C554.5 128 576 149.5 576 176L576 257.4C551.6 246.2 524.6 240 496 240C408.3 240 334.3 298.8 311.3 379.2C304.2 377.9 297.2 375 291.2 370.4L83.2 214.4C71.1 205.3 64 191.1 64 176zM304 432C304 460.6 310.2 487.6 321.4 512L128 512C92.7 512 64 483.3 64 448L64 260L262.4 408.8C275 418.2 289.3 424.2 304.1 426.7C304.1 428.5 304 430.2 304 432zM352 432C352 352.5 416.5 288 496 288C575.5 288 640 352.5 640 432C640 511.5 575.5 576 496 576C416.5 576 352 511.5 352 432zM553.4 371.1C546.3 365.9 536.2 367.5 531 374.6L478 447.5L451.2 420.7C445 414.5 434.8 414.5 428.6 420.7C422.4 426.9 422.4 437.1 428.6 443.3L468.6 483.3C471.9 486.6 476.5 488.3 481.2 487.9C485.9 487.5 490.1 485.1 492.9 481.4L556.9 393.4C562.1 386.3 560.5 376.2 553.4 371.1z" />
    </svg>
  );
};

const EMAIL_ADDRESS = "lauchieharvey@gmail.com";

const ButtonCopyEmail = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const handleClick = async () => {
    setIsCopied(true);

    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch (e) {
      console.error(e);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 2_000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (isCopied) {
    return (
      <button
        className="primary"
        title="Successfully copied to clipboard"
        onClick={handleClick}
        style={{ width: "9rem" }}
      >
        <EnvelopeCheckedIcon /> Copied
      </button>
    );
  }

  return (
    <button
      className="primary"
      title={`Copy ${EMAIL_ADDRESS} to clipboard`}
      onClick={handleClick}
      style={{ width: "9rem" }}
    >
      <EnvelopeIcon /> Copy email
    </button>
  );
};

export default ButtonCopyEmail;
