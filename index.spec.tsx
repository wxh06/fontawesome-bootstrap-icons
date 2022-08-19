import { describe, expect, it } from "@jest/globals";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { biBootstrap, biBootstrapFill } from ".";

const svgWithPath =
  /<svg( [a-zA-Z-]+(="[^"]*")?)+><path fill=".+" d=".+"><\/path><\/svg>/;

describe("React", () =>
  [biBootstrap, biBootstrapFill].forEach((icon) =>
    it(icon.iconName, () =>
      expect(
        ReactDOMServer.renderToString(<FontAwesomeIcon icon={icon} />)
      ).toMatch(svgWithPath)
    )
  ));
