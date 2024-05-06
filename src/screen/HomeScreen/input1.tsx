import React from "react";
import { ReactElement } from "react";
import AppButton from "src/components/Global/AppButton";
import AppView from "src/components/Global/AppView";
import TextInputGlobal from "src/components/Global/TextInputGlobal";
import optionTinh from "src/constants/optionTinh";
import { data_vung_gio } from "src/constants/data"
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';

interface ContainerProps { 
    cot: string, 
    tinh: string, 
    huyen: string,
    xa: string,
    vungGio: string,
    dangDiaHinh: string,
    doCaoQuyDoiGio: Number,
    thoiGianSuDungCongTrinh: Number,
    capDienApDen: string,
    setCot: (value: string) => void,
    setTinh: (value: string) => void,
    setHuyen: (value: string) => void,
    setXa: (value: string) => void,
    setVungGio: (value: string) => void,
    setDangDiaHinh: (value: string) => void,
    setCapDienApDen: (value: string) => void,
    handleSubmit: () => void, 
    handleBack: () => void,
}

const Input1 = (props: ContainerProps): ReactElement => {
    const {
        cot,
        tinh,
        huyen,
        xa,
        vungGio,
        dangDiaHinh,
        doCaoQuyDoiGio,
        thoiGianSuDungCongTrinh,
        capDienApDen,
        setCot,
        setTinh,
        setHuyen,
        setXa,
        setVungGio,
        setDangDiaHinh,
        setCapDienApDen,
        handleSubmit,
        handleBack,
    } = props;

    const [hasXa, setHasXa] = React.useState(false);
    const [isSetCot, setIsSetCot] = React.useState(false);
    const [isSetTinh, setIsSetTinh] = React.useState(false);
    const [isSetHuyen, setIsSetHuyen] = React.useState(false);
    const [isSetXa, setIsSetXa] = React.useState(false);
    const [isSetVungGio, setIsSetVungGio] = React.useState(false);
    const [isSetDangDiaHinh, setIsSetDangDiaHinh] = React.useState(false);
    const [isSetCapDienApDen, setIsSetCapDienApDen] = React.useState(false);

    const dataTinh = Object.keys(optionTinh).map((key) => {
        return {
            label: key,
            value: key,
        };
    });

    const dataHuyen = tinh? Object.keys(optionTinh[tinh]).map((key) => {
        return {
            label: key,
            value: key,
        };
    }): [];

    const dataXa = huyen? Object.keys(optionTinh[tinh][huyen]).map((key) => {
        return {
            label: key,
            value: key,
        };
    }): [];

    const dataVungGio = Object.keys(data_vung_gio).map((key) => {
        return {
            label: key,
            value: key,
        }
    });

    const handleChangeTinh = (key: any) => {
        setTinh(key);
        setHuyen('');
        setXa('');
        setVungGio('');
    };

    const handleChangeHuyen = (key: any) => {
        setHuyen(key);
        setXa('');
        if (optionTinh[tinh][key] && typeof optionTinh[tinh][key] == 'object') {
            setHasXa(true);
            setVungGio('');
        } else {
            setHasXa(false);
            setVungGio(optionTinh[tinh][key]);
            setIsSetVungGio(false);
        }
    };

    const handleChangeXa = (key: any) => {
        setXa(key);
        setVungGio(optionTinh[tinh][huyen][key]);
        setIsSetVungGio(false);
    };

    const handleSetCot = (value: string) => {
        setCot(value);
        setIsSetCot(false);
    };

    const handleSetTinh = (value: string) => {
        handleChangeTinh(value)
        setIsSetTinh(false);
    };

    const handleSetHuyen = (value: string) => {
        handleChangeHuyen(value)
        setIsSetHuyen(false);
    };

    const handleSetXa = (value: string) => {
        handleChangeXa(value)
        setIsSetXa(false);
    };

    const handleSetVungGio = (value: string) => {
        setVungGio(value);
        setIsSetVungGio(false);
    };

    const handleSetDangDiaHinh = (value: string) => {
        setDangDiaHinh(value);
        setIsSetDangDiaHinh(false);
    };

    const handleSetCapDienApDen = (value: string) => {
        setCapDienApDen(value);
        setIsSetCapDienApDen(false);
    };

    const btnSubmit = () => {
        if (!cot) {
            setIsSetCot(true);
        }
        if (!tinh) {
            setIsSetTinh(true);
        }
        if (tinh && !huyen) {
            setIsSetHuyen(true);
        }
        if (hasXa && !xa) {
            setIsSetXa(true);
        }
        if (!vungGio) {
            setIsSetVungGio(true);
        }
        if (!dangDiaHinh) {
            setIsSetDangDiaHinh(true);
        }
        if (!capDienApDen) {
            setIsSetCapDienApDen(true);
        }
        if (cot && tinh && huyen && (!hasXa || xa) && vungGio && dangDiaHinh && capDienApDen) {
            handleSubmit();
        }
    };

    return (
        <AppView>
            <TextInputGlobal
                label="Chọn cột:"
                name="cot"
                placeholder="Chọn cột"
                isDropdown
                value={cot}
                onChangeDropdown={handleSetCot}
                listDropdown={[
                    { label: 'Cột bê tông li tâm', value: '1'},
                    { label: 'Cột thép', value: '2' },
                ]}
                require
            />
            {isSetCot && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn loại cột</TextGlobalStyle>}
            <TextInputGlobal
                label="Tỉnh/TP:"
                name="tinh"
                placeholder="Chọn tỉnh/TP"
                isDropdown
                value={tinh}
                onChangeDropdown={handleSetTinh}
                listDropdown={dataTinh}
                require
            />
            {isSetTinh && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn tỉnh</TextGlobalStyle>}
            {tinh && 
            <TextInputGlobal
                label="Quận/huyện:"
                name="huyen"
                placeholder="Chọn Quận/huyện"
                isDropdown
                value={huyen}
                onChangeDropdown={handleSetHuyen}
                listDropdown={dataHuyen}
                require
            />}
            {isSetHuyen && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn huyện</TextGlobalStyle>}
            {(huyen && hasXa) && <TextInputGlobal
                label="Xã/phường:"
                name="xa"
                placeholder="Chọn Xã/phường"
                isDropdown
                value={xa}
                onChangeDropdown={handleSetXa}
                listDropdown={dataXa}
                require
            />}
            {isSetXa && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn xã</TextGlobalStyle>}
            <TextInputGlobal
                label="Vùng gió (daN/m2):"
                name="vungGio"
                placeholder="Chọn vùng gió"
                isDropdown
                value={vungGio}
                onChangeDropdown={handleSetVungGio}
                listDropdown={dataVungGio}
                require
            />
            {isSetVungGio && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn vùng gió</TextGlobalStyle>}
            <TextInputGlobal
                label="Dạng địa hình"
                name="dangDiaHinh"
                placeholder="Chọn dạng địa hình"
                isDropdown
                keyboardType="numeric"
                value={dangDiaHinh}
                onChangeDropdown={handleSetDangDiaHinh}
                listDropdown={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                ]}
                require
            />
            {isSetDangDiaHinh && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn dạng địa hình</TextGlobalStyle>}
            <TextInputGlobal
                label="Độ cao quy đổi gió (m):"
                name="doCaoQuyDoiGio"
                placeholder=""
                value={doCaoQuyDoiGio?.toString()}
                require
            />
            <TextInputGlobal
                label="Thời gian sử dụng công trình (năm):"
                name="thoiGianSuDungCongTrinh"
                placeholder=""
                value={thoiGianSuDungCongTrinh?.toString()}
                require
            />
            <TextInputGlobal
                label="Cấp điện áp đến (kV):"
                name="capDienApDen"
                placeholder="Chọn điện áp"
                isDropdown
                value={capDienApDen}
                onChangeDropdown={handleSetCapDienApDen}
                listDropdown={[
                    { label: '6.3', value: '6.3' },
                    { label: '10.5', value: '10.5'},
                    { label: '22', value: '22' },
                    { label: '35', value: '35' },
                    { label: '110', value: '110' },
                    { label: '220', value: '220' },
                    { label: '500', value: '500' },
                ]}
                require
            />
            {isSetCapDienApDen && <TextGlobalStyle style={{color: 'red'}}>Vui lòng chọn cấp điện áp đến</TextGlobalStyle>}
            <AppView row fill>
                <AppButton
                    text="Đặt lại"
                    textColor={'white'}
                    onPress={(): void => {
                        handleBack();
                    }}
                    backgroundColor={'red'}
                    borderRadius={8}
                    // loading={createNewPasswordMutation.isLoading}
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
                // loading={createNewPasswordMutation.isLoading}
                />
            </AppView>
        </AppView>
    );
}

export default Input1;