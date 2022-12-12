import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import { CheckBox } from "react-native-elements";

const ParkingServiceModal = ({ isVisible, onCancel }) => {
  const [isCheck, setCheck] = useState(false);

  const handleSubmitParking = (values) => {
    onCancel();
    console.log("Full name: " + values.fullName);
    console.log("Room: " + values.room);
    console.log("license: " + values.license);
    console.log("Extending: " + isCheck);
  };

  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <Formik
          initialValues={{
            fullName: "",
            room: "",
            license: "",
          }}
          onSubmit={(values) => handleSubmitParking(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <KeyboardAvoidingView
              contentContainerStyle={styles.modalView}
              behavior="position"
              enabled
              style={styles.keyboardAvoidingView}
            >
              <Text style={styles.modalTitle}>PARKING SERVICE</Text>
              <TextInput
                onChangeText={handleChange("fullName")}
                placeholder="Full name"
                value={values.fullName}
                style={styles.modalInput}
              />
              <TextInput
                placeholder="Room"
                value={values.room}
                onChangeText={handleChange("room")}
                style={styles.modalInput}
              />
              <TextInput
                placeholder="License plates"
                value={values.license}
                onChangeText={handleChange("license")}
                style={styles.modalInput}
              />
              <View style={styles.checkbox}>
                <CheckBox
                  titleProps={{ style: styles.textCheckBox }}
                  containerStyle={styles.checkBoxContainer}
                  title="Extending"
                  checked={isCheck}
                  onPress={() => setCheck(!isCheck)}
                />
              </View>
              <Text style={styles.text}>
                Our parking service offers with 100,000 vnd a month, you can
                tick the checkbox above for extension, and if do that, please
                make sure to pay the full fee each month
              </Text>
              <View style={styles.modalButton}>
                <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
                  <Text style={styles.btnText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnConfirm}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnText}>CONFIRM</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    marginTop: 22,
  },
  modalView: {
    alignSelf: "center",
    width: "80%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#525298",
    marginBottom: 10,
    alignSelf: "left",
  },
  modalInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#d5d5e1",
    padding: 15,
    width: "100%",
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 10,
  },
  modalButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 10,
  },
  btnCancel: {
    borderRadius: 14,
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#92949b",
    marginRight: 5,
    marginLeft: 5,
    color: "#000",
  },
  btnConfirm: {
    borderRadius: 14,
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#93d8f8",
    marginRight: 5,
    marginLeft: 5,
    color: "#000",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  checkbox: {
    padding: 0,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
  },
  textCheckBox: {
    color: "black",
    fontSize: 16,
    marginLeft: 8,
  },
  checkBoxContainer: {
    marginLeft: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  keyboardAvoidingView: {
    width: "100%",
    paddingBottom: 20,
  },
});

export default ParkingServiceModal;
