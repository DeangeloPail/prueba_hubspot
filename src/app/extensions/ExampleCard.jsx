import React from "react";
import {List,Button, Link,ButtonRow, Alert,Accordion, Flex, Box,Tile,Dropdown} from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(() => <Extension />);

const Extension = () => {
  const handleAccordionClick = () => {
    console.log("Someone clicked the button!");
  };

  const ddOptions = [
    {
      label: 'Clone',
      onClick: () => console.log({ message: 'Clone group' }),
    },
    {
      label: 'Delete',
      onClick: () => console.log({ message: 'Delete group' }),
    },
  ];
  return (
    <>
    <Dropdown
      options={ddOptions}
      variant="primary"
      buttonSize="md"
      buttonText="More"
    />
    
      <Flex direction={"row"} alignSelf={"end"} gap={"small"}>
        <Box flex={1}>
          <ButtonRow
            dropDownButtonOptions={{
              text: "Extra",
              size: "sm",
              variant: "transparent",
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="destructive" type="reset">
              Destructive
            </Button>
            <Button type="submit">Submit</Button>
            <Button type="button">Other</Button>
          </ButtonRow>
        </Box>
      </Flex>

      <List variant="unordered-styled">
        <Link href="https://developers.hubspot.com/docs/platform/ui-components">
          📖 Explore our library of UI components
        </Link>
        <Link href="www.developers.hubspot.com">
          📖 Learn more about utilities to help you build better extensions
        </Link>
        <Link href="github.com/hubspot/ui-extensions-examples">
          📖 Get inspired by private app code samples
        </Link>
        <Link href="https://ecosystem.hubspot.com/marketplace/apps/app-cards">
          📖 Look at the Marketplace collection of apps that contain app cards
        </Link>
        <Link href="https://ecosystem.hubspot.com/marketplace/apps/app-cards">
          ▶️ Find resources to learn more abraham josue
        </Link>
        <Link href="https://developers.hubspot.com/slack">
          ▶️ Connect with developers on #ui-extensions channel on developer
          Slack community
        </Link>
      </List>
    </>
  );
};
