import React from "react";

export const Bubbling = () => {
  const onHandleDocumentClick = () => {
    alert("Document clicked");
  };
  React.useEffect(() => {
    /**
     * Third option is false by default which specifies
     * if it is a capture event or bubbling event
     * We will see capture event details in Capture section
     * In Nutshell capture event is opposite direction of the bubbling events
     * Capture events start from top root element(window in browsers)
     * to the bottom target element. Always capture event mechanism starts to work down to the
     * target element and than bubbling event mechanism starts to work from target bottom element up to the
     * root element
     */
    document.addEventListener("click", onHandleDocumentClick, false);
    return () => {
      document.removeEventListener("click", onHandleDocumentClick, false);
    };
  }, []);

  const onHandleHeaderClick = (event) => {
    alert("Header clicked");
    alert(`Target: ${event.target}, Current Target:  ${event.currentTarget}`);
  };
  const onHandleButtonClick = (event) => {
    /*
    Events are bubbled by default. That Means If you
    click button  and do not call `stopPropogation`
    then it will trigger the parent onClick(if provided)
    until the root object which is window in client side
    */
    alert("Button clicked");

    /**
     * event.target -> specifies which element causes the original event
     * event.currentTarget -> specifies which element is  in the
     * current event Bubbling / capturing case.
     */

    alert(`Target: ${event.target}, Current Target:  ${event.currentTarget}`);

    /**
     * We can stop propogate event via event.stopPropagation(). Thus event
     * will stop on target element. But we should be careful  when using it
     */

    event.stopPropagation();
  };

  return (
    <div>
      <header onClick={onHandleHeaderClick}>
        <button onClick={onHandleButtonClick}>Logout</button>
      </header>
    </div>
  );
};
