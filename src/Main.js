import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components";
import { mainRows } from "../rows";
import Icon from "react-native-vector-icons/Ionicons";

export default function Main() {
  return (
    <View>
      <View>
        <MView>
          <Text>M</Text>
        </MView>
        <WView>
          <Text>W</Text>
        </WView>
        <CView>
          <Text>C</Text>
        </CView>
      </View>

      <HeaderTitleView>
        <HeaderTitleTxt>TODAY's LIST</HeaderTitleTxt>
        <HeaderImg style={{ marign: 100 }} source={require("../../assets/images/mainSetting.png")} />
      </HeaderTitleView>
      <BodyView>
        <BodySignDateImg source={require("../../assets/images/mainSign.png")} />
        <BodyMenuImg source={require("../../assets/images/mainMenu.png")} />
      </BodyView>
      <BodyTxtView>
        {mainRows.map((row, idx) => {
          return (
            <View style={{ flex: 1 }} key={idx}>
              <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                  <Icon name="square-outline" size={30} color="gray" />
                </View>
                <View>
                  <Text>{row.mainRows[0].title}</Text>
                  <Text>{row.mainRows[0].date}</Text>
                </View>
              </View>
              <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                  <Icon name="square-outline" size={30} color="gray" />
                </View>
                <View>
                  <Text>{row.mainRows[1].title}</Text>
                  <Text>{row.mainRows[1].date}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </BodyTxtView>
      <FooterView>
        <FooterButtonImg source={require("../../assets/images/mainButton.png")} />
        <FooterPlusImg source={require("../../assets/images/mainPlus.png")} />
      </FooterView>
    </View>
  );
}

const HeaderTitleView = styled(View)`
  flex:1
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 320px;
`;

const HeaderTitleTxt = styled(Text)`
  font-size: 24px;
  padding-top: 40px;
`;

const HeaderImg = styled(Image)`
  width: 37px;
  height: 35px;
  margin-left: 60px;
  margin-top: 20px;
`;

const BodyView = styled(View)`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

const BodyTxtView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const BodySignDateImg = styled(Image)`
  width: 150px;
  height: 150px;
`;

const BodyMenuImg = styled(Image)`
  width: 150px;
  height: 200px;
`;

const FooterView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const FooterPlusImg = styled(Image)`
  width: 35px;
  height: 35px;
  margin: 7px;
`;

const FooterButtonImg = styled(Image)`
  width: 35px;
  height: 35px;
  margin: 7px;
`;

const MView = styled(View)`
  position: absolute;
  top: 195px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
`;

const WView = styled(View)`
  position: absolute;
  top: 255px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
`;

const CView = styled(View)`
  position: absolute;
  top: 315px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
`;

const styles = StyleSheet.create({});
