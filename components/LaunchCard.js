import React from "react";
import { Container, Grid, Card, Image } from "semantic-ui-react";

const LaunchCard = ({ launchData }) => (
  <div style={{ marginTop: "10px" }}>
    <Grid columns="4" stackable>
      {launchData.length
        ? launchData.map((item) => (
            <Grid.Column mobile={16} tablet={5} computer={4} largeScreen={4}>
              <Card centered raised>
                <Image
                  src={item.links.mission_patch}
                  alt={item.mission_name}
                  size="small"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{item.mission_name}</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))
        : null}
    </Grid>
  </div>
);

export default LaunchCard;
