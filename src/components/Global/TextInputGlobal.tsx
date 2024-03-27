import React, {Key, MutableRefObject, ReactElement, useState} from 'react';
import {
  KeyboardTypeOptions,
  Pressable,
  TextInput,
  TextInputIOSProps,
  View,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Config from '../../config';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {useField, useFormikContext} from 'formik';
import {FieldHookConfig} from 'formik/dist/Field';
import IconFeather from 'react-native-vector-icons/Feather';
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {ConvertDayTime, ConvertTime} from 'src/utils/ConvertTime';
import Icon from '../../utils/Icon';
import {ConvertPhoneNumber} from 'src/utils/ConvertPhoneNumber';
import {isIOS} from '../../utils/device';
import {ConvertMoney} from 'src/utils/ConvertMoney';
import {CallNumber} from 'src/utils/CallNumber';

const {
  NEUTRALS_2,
  BORDER_GRAY_2,
  NEUTRALS_4,
  NEUTRALS_3,
  NEUTRALS_6,
  WHITE,
  NEUTRALS_5,
  BLACK_3,
} = Config.COLOR_CONFIG;

interface TextInputGlobalProps {
  isCollab?: boolean;
  isSubmitTime?: boolean;
  isCallingInput?: boolean;
  label?: string;
  placeholder: string;
  value?: string;
  isPassword?: boolean;
  disable?: boolean;
  isIconMail?: boolean;
  isIconDateTime?: boolean;
  modeDateTime?: string;
  style?: any;
  maxLength?: number;
  autoCorrect?: boolean;
  onSubmitEditing?: ({nativeEvent: {text, eventCount, target}}: any) => void;
  keyboardType?: KeyboardTypeOptions;
  styleInput?: any;
  multiline?: boolean;
  numberOfLines?: number;
  styleInputContainer?: any;
  styleTextLabel?: any;
  onFocus?: any;
  require?: boolean;
  textAlignVertical?: 'center' | 'auto' | 'bottom' | 'top' | undefined;
  inputRef?: MutableRefObject<TextInput>;
  textContentType?: TextInputIOSProps['textContentType'];
  isDropdown?: boolean;
  isSelectDateTime?: boolean;
  isViewDateTime?: boolean;
  listDropdown?: Array<{
    label: string;
    value: Key;
  }>;
  onChangeDropdown?: (value: any) => void;
  handleSubmitWarrantyTime?: (dateSelect: any) => void;
  disableEditBackground?: boolean;
  isConvertMoney?: boolean;
  isConvertPhoneNumber?: boolean;
  customizeIcon?: any;
  regexPattern?: object;
  replacementCharacter?: string;
  onChangeWithRegex?: boolean;
}

function TextInputGlobal(
  props: TextInputGlobalProps & FieldHookConfig<string>,
): ReactElement {
  const {
    isCollab,
    isSubmitTime,
    isCallingInput,
    label = '',
    placeholder,
    value = '',
    isPassword,
    disable,
    isIconMail,
    isIconDateTime,
    style,
    customizeIcon,
    maxLength = 255,
    onSubmitEditing,
    handleSubmitWarrantyTime,
    keyboardType = 'default',
    modeDateTime = '',
    styleInput,
    multiline,
    numberOfLines,
    styleInputContainer,
    styleTextLabel,
    onFocus,
    require,
    autoCorrect = false,
    textAlignVertical = undefined,
    textContentType,
    isDropdown,
    isSelectDateTime,
    isViewDateTime,
    listDropdown = [],
    onChangeDropdown,
    disableEditBackground,
    isConvertMoney,
    isConvertPhoneNumber,
    regexPattern,
    onChangeWithRegex = false,
    replacementCharacter = '',
  } = props;

  const [hidePass, setHidePass] = useState(isPassword);
  const [field, meta, helpers] = useField(props);
  const [open, setOpen] = useState(false);
  const formikContext = useFormikContext();

  if (!formikContext) {
    throw new Error('TextInputGlobal has to be use inside Formik');
  }
  const setValue = (valueChange: any): void => {
    const numericValue = valueChange.replace(
      regexPattern,
      replacementCharacter,
    );
    helpers.setValue(numericValue);
  };

  return (
    <View style={[styles.root, style]}>
      {label.length > 0 && (
        <TextGlobalStyle style={[styles.labelInput, styleTextLabel]}>
          {label}
          {require ? (
            <TextGlobalStyle style={{color: 'red'}}> *</TextGlobalStyle>
          ) : (
            ''
          )}
        </TextGlobalStyle>
      )}

      {isDropdown ? (
        <View>
          <Dropdown
            style={
              disable
                ? isIOS()
                  ? styles.dropdownDisabled
                  : style.dropdownDisabledAndroid
                : isIOS()
                ? styles.dropdown
                : styles.dropdownAndroid
            }
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={listDropdown}
            itemTextStyle={styles.itemTextStyle}
            labelField="label"
            valueField="value"
            value={value}
            placeholder={placeholder}
            onChange={(item): void => {
              onChangeDropdown?.(item.value);
            }}
            keyboardAvoiding
            disable={!!disable}
          />
        </View>
      ) : isSelectDateTime || isCallingInput ? (
        <View pointerEvents={isViewDateTime ? 'none' : 'auto'}>
          <TouchableOpacity
            onPress={(): void => {
              if (isCallingInput) {
                CallNumber(field.value);
              } else if (isSelectDateTime) {
                setOpen(!open);
              }
            }}
            hitSlop={{
              top: 30,
              bottom: 30,
              left: 30,
              right: 30,
            }}>
            <View
              style={[
                styleInputContainer,
                styles.inputContainer,
                {
                  backgroundColor: disable ? 'white' : 'white',
                  justifyContent: 'space-between',
                },
              ]}>
              <TouchableOpacity
                onPress={(): void => {
                  if (isCallingInput) {
                    CallNumber(field.value);
                  } else if (isSelectDateTime) {
                    setOpen(!open);
                  }
                }}>
                <TextInput
                  autoCorrect={autoCorrect}
                  onBlur={formikContext.handleBlur(field.name)}
                  onChangeText={helpers.setValue}
                  value={
                    modeDateTime === 'datetime'
                      ? ConvertTime(field.value)
                      : modeDateTime === 'date'
                      ? ConvertDayTime(field.value)
                      : isCallingInput
                      ? field.value
                      : undefined
                  }
                  autoComplete="email"
                  textContentType={textContentType}
                  autoCapitalize="none"
                  ref={props.inputRef}
                  style={[styles.inputField, styleInput]}
                  placeholderTextColor={BORDER_GRAY_2}
                  placeholder={placeholder}
                  secureTextEntry={!!hidePass}
                  enablesReturnKeyAutomatically
                  editable={!disable}
                  selectTextOnFocus={!disable}
                  maxLength={maxLength}
                  onSubmitEditing={onSubmitEditing}
                  keyboardType={keyboardType}
                  multiline={multiline}
                  numberOfLines={numberOfLines}
                  onFocus={onFocus}
                  textAlignVertical={textAlignVertical}
                />
              </TouchableOpacity>
              {customizeIcon ? <View>{customizeIcon}</View> : null}
              {isIconDateTime && <Icon icon="DoB" size={24} color="#B1B5C4" />}
            </View>
            {isCollab ? (
              <DatePicker
                title="Chọn thời gian"
                modal
                locale="vi"
                open={open}
                date={
                  isSelectDateTime
                    ? moment(field.value).toDate()
                    : isCallingInput
                    ? moment(new Date()).toDate()
                    : moment(new Date()).toDate()
                }
                mode={modeDateTime as any}
                theme="light"
                maximumDate={moment(new Date()).toDate()}
                onConfirm={(dateSelect): void => {
                  if (isSubmitTime && handleSubmitWarrantyTime) {
                    handleSubmitWarrantyTime(dateSelect);
                  }
                  setOpen(false);
                  helpers.setValue(dateSelect as any);
                }}
                onCancel={(): void => {
                  setOpen(false);
                }}
                confirmText="Xác nhận"
                cancelText="Huỷ"
              />
            ) : (
              <DatePicker
                title="Chọn thời gian"
                modal
                locale="vi"
                open={open}
                date={
                  isSelectDateTime
                    ? moment(field.value).toDate()
                    : isCallingInput
                    ? moment(new Date()).toDate()
                    : moment(new Date()).toDate()
                }
                mode={modeDateTime as any}
                theme="light"
                minimumDate={
                  modeDateTime === 'datetime'
                    ? new Date()
                    : moment.utc(new Date()).startOf('day').toDate()
                }
                minuteInterval={15}
                onConfirm={(dateSelect): void => {
                  if (isSubmitTime && handleSubmitWarrantyTime) {
                    handleSubmitWarrantyTime(dateSelect);
                  }
                  setOpen(false);
                  helpers.setValue(dateSelect as any);
                }}
                onCancel={(): void => {
                  setOpen(false);
                }}
                confirmText="Xác nhận"
                cancelText="Huỷ"
              />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styleInputContainer,
            styles.inputContainer,
            {
              backgroundColor: disableEditBackground ? '#F5F5F5' : 'white',
              // height: 48,
            },
          ]}>
          <TextInput
            autoCorrect={autoCorrect}
            onBlur={formikContext.handleBlur(field.name)}
            onChangeText={onChangeWithRegex ? setValue : helpers.setValue}
            value={
              isConvertPhoneNumber
                ? ConvertPhoneNumber(field.value)
                : isConvertMoney
                ? ConvertMoney(field.value)
                : field.value
            }
            autoComplete="email"
            textContentType={textContentType}
            autoCapitalize="none"
            ref={props.inputRef}
            style={[styles.inputField, styleInput]}
            placeholderTextColor={BORDER_GRAY_2}
            placeholder={placeholder}
            secureTextEntry={!!hidePass}
            enablesReturnKeyAutomatically
            editable={!disable}
            selectTextOnFocus={!disable}
            maxLength={maxLength}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onFocus={onFocus}
            textAlignVertical={textAlignVertical}
          />
          {isPassword && (
            <TouchableOpacity onPress={(): void => setHidePass(!hidePass)}>
              <IconFeather
                name={hidePass ? 'eye-off' : 'eye'}
                size={22}
                color={Config.COLOR_CONFIG.NEUTRALS_2}
              />
            </TouchableOpacity>
          )}
          {isIconMail && (
            <Pressable>
              <IconMaterialCommunity
                name="email-outline"
                size={27}
                color={NEUTRALS_2}
                style={styles.emailIcon}
              />
            </Pressable>
          )}
        </View>
      )}
      <View>
        {meta.error && meta.touched ? (
          <TextGlobalStyle style={{color: 'red'}}>{meta.error}</TextGlobalStyle>
        ) : (
          <TextGlobalStyle />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: NEUTRALS_6,
    borderRadius: 12,
    borderWidth: 2,
    color: NEUTRALS_4,
    flexDirection: 'row',
    // height: 48,
    paddingRight: 16,
    paddingLeft: 10,
    paddingVertical: isIOS() ? 13 : 0,
    width: '100%',
  },

  inputField: {
    color: NEUTRALS_3,
    width: '97%',
    // height: 48,
  },
  labelInput: {
    color: BLACK_3,
    fontWeight: '500',
    fontSize: 17,
    marginBottom: 10,
  },

  emailIcon: {
    color: NEUTRALS_4,
    marginRight: 5,
  },
  dropdown: {
    borderColor: NEUTRALS_6,
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 2,
    height: 48,
    paddingRight: 16,
    paddingLeft: 8,
    width: '100%',
  },
  dropdownAndroid: {
    borderColor: NEUTRALS_6,
    backgroundColor: WHITE,
    borderRadius: 12,
    borderWidth: 2,
    height: 52,
    paddingRight: 16,
    paddingLeft: 8,
    width: '100%',
  },
  dropdownDisabled: {
    borderColor: NEUTRALS_6,
    backgroundColor: '#ccc',
    borderRadius: 12,
    borderWidth: 2,
    height: 48,
    paddingRight: 16,
    paddingLeft: 8,
    width: '100%',
  },
  dropdownDisabledAndroid: {
    borderColor: NEUTRALS_6,
    backgroundColor: '#ccc',
    borderRadius: 12,
    borderWidth: 2,
    height: 52,
    paddingRight: 16,
    paddingLeft: 8,
    width: '100%',
  },
  placeholderStyle: {
    color: NEUTRALS_5,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  itemTextStyle: {
    fontSize: 14,
  },
});
export default TextInputGlobal;
