import React, { CSSProperties } from "react";

import CreditCardIllustration from "../../illustrations/CreditCart";
import Documentsllustration from "../../illustrations/Documents";
import DoneCheckIllustration from "../../illustrations/DoneCheck";
import EmptyCartIllustration from "../../illustrations/EmptyCart";
import EmptyInboxIllustration from "../../illustrations/EmptyInbox";
import ErrorIllustration from "../../illustrations/Error";
import ImagesIllustration from "../../illustrations/Images";
import LocationIllustration from "../../illustrations/Location";
import MessagesIllustration from "../../illustrations/Messages";
import NoConectionIllustration from "../../illustrations/NoConection";
import NoSearchResultsIllustration from "../../illustrations/NoSearchResults";
import NoTasksIllustration from "../../illustrations/NoTasks";

function getIllustrationToRender(
  illustrationKey:
    | "creditCard"
    | "documents"
    | "doneCheck"
    | "emptyCart"
    | "emptyInbox"
    | "error"
    | "images"
    | "location"
    | "messages"
    | "noConection"
    | "noSearchResults"
    | "noTasks",
  illustrationConfigs?: {
    style?: CSSProperties;
    className?: string;
    height?: string;
  }
): JSX.Element {
  switch (illustrationKey) {
    case "creditCard":
      return <CreditCardIllustration {...illustrationConfigs} />;
    case "documents":
      return <Documentsllustration {...illustrationConfigs} />;
    case "doneCheck":
      return <DoneCheckIllustration {...illustrationConfigs} />;
    case "emptyCart":
      return <EmptyCartIllustration {...illustrationConfigs} />;
    case "emptyInbox":
      return <EmptyInboxIllustration {...illustrationConfigs} />;
    case "error":
      return <ErrorIllustration {...illustrationConfigs} />;
    case "images":
      return <ImagesIllustration {...illustrationConfigs} />;
    case "location":
      return <LocationIllustration {...illustrationConfigs} />;
    case "messages":
      return <MessagesIllustration {...illustrationConfigs} />;
    case "noConection":
      return <NoConectionIllustration {...illustrationConfigs} />;
    case "noSearchResults":
      return <NoSearchResultsIllustration {...illustrationConfigs} />;
    case "noTasks":
      return <NoTasksIllustration {...illustrationConfigs} />;

    default:
      return <div />;
  }
}

export { getIllustrationToRender };
