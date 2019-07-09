import React from "react";
import { View } from "react-native";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";

import * as shape from "d3-shape";

const data = [0, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

export const Graph = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.85, flexDirection: "row" }}>
        <YAxis
          data={data}
          svg={{
            fill: "grey"
          }}
          numberOfTicks={6}
          contentInset={{
            top: 10,
            bottom: 10
          }}
          spacing={0}
          formatLabel={value => " " + value + "  "}
        />
        <LineChart
          style={{ flex: 1 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ stroke: "#27E68D", strokeWidth: 5 }}
        >
          <Grid />
        </LineChart>
      </View>
      <View style={{ flex: 0.15 }}>
        <XAxis
          style={{
            marginTop: 10,
            marginLeft: 10
          }}
          data={data}
          contentInset={{
            left: 10,
            right: 10
          }}
        />
      </View>
    </View>
  );
};
