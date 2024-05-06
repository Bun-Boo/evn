import { set } from "lodash";
import React from "react";
import { ReactElement } from "react";
import AppButton from "src/components/Global/AppButton";
import AppView from "src/components/Global/AppView";
import TextInputGlobal from "src/components/Global/TextInputGlobal";
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';

interface ContainerProps { 
    doCaoTreoDayTrungBinh: Number,
    kcMinChoPhepTuDayDanDenMatDat: Number,
    soLuongPhanPha: string,
    soLuongDayDanTrenMotTangXa: string,
    kcTuDiemTreoDayToiTamCotH4: Number,
    loaiCotBeTongLiTam: string,
    chieuCaoCot: string,
    heSoAnToan: Number,
    setSoLuongPhanPha: (value: string) => void,
    setSoLuongDayDanTrenMotTangXa: (value: string) => void,
    handleSubmit: () => void, 
    handleBack: () => void,
}

const Input3 = (props: ContainerProps): ReactElement => {
    const {
        doCaoTreoDayTrungBinh,
        kcMinChoPhepTuDayDanDenMatDat,
        soLuongPhanPha,
        soLuongDayDanTrenMotTangXa,
        kcTuDiemTreoDayToiTamCotH4,
        loaiCotBeTongLiTam,
        chieuCaoCot,
        heSoAnToan,
        setSoLuongPhanPha,
        setSoLuongDayDanTrenMotTangXa,
        handleSubmit,
        handleBack,
    } = props;

    const [isSetSoLuongPhanPha, setIsSetSoLuongPhanPha] = React.useState(false);
    const [isSetSoLuongDayDanTrenMotTangXa, setIsSetSoLuongDayDanTrenMotTangXa] = React.useState(false);

    const handleSetSoLuongPhanPha = (value: string): void => {
        setSoLuongPhanPha(value);
        setIsSetSoLuongPhanPha(false);
    }

    const handleSetSoLuongDayDanTrenMotTangXa = (value: string): void => {
        setSoLuongDayDanTrenMotTangXa(value);
        setIsSetSoLuongDayDanTrenMotTangXa(false);
    }

    const btnSubmit = (): void => {
        if (!soLuongPhanPha) {
            setIsSetSoLuongPhanPha(true);
        } 
        if (!soLuongDayDanTrenMotTangXa) {
            setIsSetSoLuongDayDanTrenMotTangXa(true);
        } 
        if (soLuongPhanPha && soLuongDayDanTrenMotTangXa) {
            handleSubmit();
        }
    };
    return (
        <AppView>
            <TextInputGlobal
                label="Độ cao treo dây trung bình (m):"
                name="doCaoTreoDayTrungBinh"
                placeholder="Độ cao treo dây trung bình (m)"
                value={doCaoTreoDayTrungBinh?.toString()}
                require
            />
            <TextInputGlobal
                label="K/C min cho phép từ dây dẫn đến mặt đất (m):"
                name="kcMinChoPhepTuDayDanDenMatDat"
                placeholder="K/C min cho phép từ dây dẫn đến mặt đất (m)"
                value={kcMinChoPhepTuDayDanDenMatDat?.toString()}
                require
            />
            <TextInputGlobal
                label="Số lượng phân pha:"
                name="soLuongPhanPha"
                placeholder="Nhập Số lượng phân pha"
                isDropdown
                value={soLuongPhanPha}
                onChangeDropdown={handleSetSoLuongPhanPha}
                listDropdown={[
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                ]}
                require
            />
            {isSetSoLuongPhanPha && <TextGlobalStyle style={{ color: 'red'}}>Vui lòng chọn số lượng phân pha</TextGlobalStyle>}
            <TextInputGlobal
                label="Số lượng dây dẫn trên một tầng xà:"
                name="soLuongDayDanTrenMotTangXa"
                placeholder="Số lượng dây dẫn trên một tầng xà"
                isDropdown
                value={soLuongDayDanTrenMotTangXa}
                onChangeDropdown={handleSetSoLuongDayDanTrenMotTangXa}
                listDropdown={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                ]}
                require
            />
            {isSetSoLuongDayDanTrenMotTangXa && <TextGlobalStyle style={{ color: 'red'}}>Vui lòng chọn số lượng dây dẫn trên một tầng xà</TextGlobalStyle>}
            <TextInputGlobal
                label="Khoảng cách từ điểm treo dây tới tâm cột H4/2 (m):"
                name="kcTuDiemTreoDayToiTamCotH4"
                placeholder="Khoảng cách từ điểm treo dây tới tâm cột H4/2 (m)"
                value={kcTuDiemTreoDayToiTamCotH4?.toString()}
                require
            />
            <TextInputGlobal
                label="Loại cột bê tông li tâm:"
                name="loaiCotBeTongLiTam"
                placeholder="Loại cột bê tông li tâm"
                value={loaiCotBeTongLiTam}
                require
            />
            <TextInputGlobal
                label="Chiều cao cột (m):"
                name="chieuCaoCot"
                placeholder="Chiều cao cột (m)"
                value={chieuCaoCot}
                require
            />
            <TextInputGlobal
                label="Hệ số an toàn:"
                name="heSoAnToan"
                placeholder="Hệ số an toàn"
                value={heSoAnToan?.toString()}
                require
            />
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

export default Input3;