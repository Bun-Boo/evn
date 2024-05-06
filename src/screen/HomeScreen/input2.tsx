
import {Text} from 'react-native';
import React from "react";
import { ReactElement, useEffect } from "react";
import AppButton from "src/components/Global/AppButton";
import AppView from "src/components/Global/AppView";
import TextInputGlobal from "src/components/Global/TextInputGlobal";
import optionDayDan from "src/constants/optionDayDan";
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';

interface ContainerProps { 
    dayDan: string,
    ungSuatLonNhat: Number,
    ungSuatTrungBinh: Number,
    setDayDan: (value: string) => void,
    handleSubmit: () => void, 
    handleBack: () => void,
}

const Input2 = (props: ContainerProps): ReactElement => {
    const {
        dayDan,
        ungSuatLonNhat,
        ungSuatTrungBinh,
        setDayDan,
        handleSubmit,
        handleBack,
    } = props;

    const [moduleDanHoi, setModuleDanHoi] = React.useState('');
    const [heSoDanNoDai, setHeSoDanNoDai] = React.useState('');
    const [duongKinhChiuGio, setDuongKinhChiuGio] = React.useState('');
    const [tietDien, setTietDien] = React.useState('');
    const [trongLuongRieng, setTrongLuongRieng] = React.useState('');
    const [ungSuatDut, setUngSuatDut] = React.useState('');
    const [isSetDayDan, setIsSetDayDan] = React.useState(false);

    const dataDayDan = optionDayDan.map((item) => {
        return {
            label: item.loai_day,
            value: item.loai_day,
        };
    });

    useEffect(() => {
        const data: any = optionDayDan.find((item) => item.loai_day == dayDan);
        if (data) {
            setModuleDanHoi(data.module_dan_hoi);
            setHeSoDanNoDai(data.he_so_dan_no_dai);
            setDuongKinhChiuGio(data.duong_kinh_chiu_gio);
            setTietDien(data.tiet_dien);
            setTrongLuongRieng(data.trong_luong_rieng);
            setUngSuatDut(data.ung_suat_dut);
        }
    }, [dayDan]);

    const handleSetDayDan = (value: string): void => {
        setDayDan(value);
        setIsSetDayDan(false);
    }

    const btnSubmit = (): void => {
        if (!dayDan) {
            setIsSetDayDan(true);
        } else {
            handleSubmit();
        }
    };

    return (
        <AppView>
            <TextInputGlobal
                label="Dây dẫn:"
                name="dayDan"
                placeholder="Chọn dây dẫn"
                isDropdown
                value={dayDan}
                onChangeDropdown={handleSetDayDan}
                listDropdown={dataDayDan}
                require
            />
            {isSetDayDan && <TextGlobalStyle style={{ color: 'red'}}>Vui lòng chọn loại dây dẫn</TextGlobalStyle>}
            <TextInputGlobal
                label="Ứng suất lớn nhất (daN/mm2):"
                name="ungSuatLonNhat"
                value={ungSuatLonNhat + ""}
                placeholder="Ứng suất lớn nhất (daN/mm2)"
                require
            />
            <TextInputGlobal
                label="Ứng suất trung bình (daN/mm2):"
                name="ungSuatTrungBinh"
                value={ungSuatTrungBinh + ""}
                placeholder="Ứng suất trung bình (daN/mm2)"
                require
            />

            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Thông số dây dẫn</Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10 }}>Module đàn hồi: {moduleDanHoi}  {dayDan&&"(daN/mm2)"}</Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10 }}>Hệ số đàn nở dài: {heSoDanNoDai} </Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10 }}>Đường kính chịu gió: {duongKinhChiuGio} {dayDan&&"(mm)"}</Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10 }}>Tiết diện: {tietDien} {dayDan&&"(mm2)"}</Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10 }}>Trọng lượng riêng: {trongLuongRieng} {dayDan&&"(daN/mm3)"}</Text>
            <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 10, marginBottom: 50 }}>Ứng suất đứt: {ungSuatDut} {dayDan&&"(daN/mm2)"}</Text>


            <AppView row fill>
                <AppButton
                    text="Quay lại"
                    textColor={'white'}
                    onPress={(): void => {
                        handleBack();
                    }}
                    backgroundColor={'red'}
                    borderRadius={8}
                    style={{ width: '50%', marginRight: 10 }}
                />
                <AppButton
                    text="Tiếp tục"
                    textColor={'white'}
                    onPress={(): void => {
                        btnSubmit();
                    }}
                    backgroundColor={'blue'}
                    borderRadius={8}
                    style={{ width: '50%' }}
                />
            </AppView>
        </AppView>
    );
}

export default Input2;