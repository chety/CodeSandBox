import React from "react";

export const Capturing = () => {
  const onHandleDocumentClick = () => {
    alert("Document Capture clicked");
  };
  React.useEffect(() => {
    /**
     * By setting third argument to true, we tell DOM that it is a capture
     * event. That means if any click happens in the bottom of the tree
     * first documents capture click will start to work to the target capture click.
     * When target captureClick executed than it will start from target bubble click(if present)
     * to the top
     */
    document.addEventListener("click", onHandleDocumentClick, true);
    return () => {
      document.removeEventListener("click", onHandleDocumentClick, true);
    };
  }, []);

  const onHandleHeaderCaptureClick = (event) => {
    alert("Header capture clicked");
  };
  const onHandleButtonClick = (event) => {
    /*
      If we click button then here ise the transition way
      1- Document capture click(Root capture click works first then to the bottom
        . All the captures click events work during the path )
      2-  Header capture click works and it comes to the button element
      3- Since button does not have a capture click event and is the target element
      then button click(bubble event ) starts to work. Then it moves to the
      upper parent elements click event to the root top element

    */
    alert("Button bubble clicked");

    event.stopPropagation();
  };

  return (
    <div>
      <header onClickCapture={onHandleHeaderCaptureClick}>
        <button onClick={onHandleButtonClick}>Logout</button>
      </header>
    </div>
  );
};
