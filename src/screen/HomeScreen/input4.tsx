import React from "react";
import { ReactElement } from "react";
import AppButton from "src/components/Global/AppButton";
import AppView from "src/components/Global/AppView";
import TextInputGlobal from "src/components/Global/TextInputGlobal";
import optionCongDungCot from "src/constants/optionCongDungCot";
import optionLoaiCot from "src/constants/optionLoaiCot";
import TextGlobalStyle from '../../styles/GlobalStyle/TextGlobal';

interface ContainerProps { 
    congDungCot: string,
    loaiCot: string,
    kc: Number,
    kcGio: Number,
    kcTrongLuong: Number,
    kcDaiBieu: Number,
    gocNeo: Number,
    soMach: string,
    setCongDungCot: (value: string) => void,
    setLoaiCot: (value: string) => void,
    setSoMach: (value: string) => void,
    handleSubmit: () => void, 
    handleBack: () => void,
}

const Input4 = (props: ContainerProps): ReactElement => {
    const {
        congDungCot,
        loaiCot,
        kc,
        kcGio,
        kcTrongLuong,
        kcDaiBieu,
        gocNeo,
        soMach,
        setCongDungCot,
        setLoaiCot,
        setSoMach,
        handleSubmit,
        handleBack,
    } = props;

    const [hasGocNeo, setHasGocNeo] = React.useState(false);

    const dataCongDungCot = optionCongDungCot.map((item) => {
        return {
            label: item,
            value: item,
        }
    });

    const dataLoaiCot = optionLoaiCot.map((item) => {
        return {
            label: item,
            value: item,
        }
    });

    const handleChangeCongDungCot = (value: string): void => {
        setCongDungCot(value);
        if (value === "Néo góc") {
            setHasGocNeo(true);
        } else {
            setHasGocNeo(false);
        }
    };
    return (
        <AppView>
            <TextInputGlobal
                label="Công dụng cột:"
                name="congDungCot"
                placeholder="Công dụng cột"
                isDropdown
                value={congDungCot}
                onChangeDropdown={handleChangeCongDungCot}
                listDropdown={dataCongDungCot}
                require
            />
            <TextInputGlobal
                label="Loại cột:"
                name="loaiCot"
                placeholder="Loại cột"
                isDropdown
                value={loaiCot}
                onChangeDropdown={setLoaiCot}
                listDropdown={dataLoaiCot}
                require
            />
            <TextInputGlobal
                label="K/C (m):"
                name="kc"
                placeholder="Nhập K/C (m)"
                value={kc?.toString()}
                require
            />
            <TextInputGlobal
                label="K/C gió (m):"
                name="kcGio"
                placeholder="K/C gió (m)"
                value={kcGio?.toString()}
                require
            />
            <TextInputGlobal
                label="K/C trọng lượng (m):"
                name="kcTrongLuong"
                placeholder="K/C trọng lượng (m)"
                value={kcTrongLuong?.toString()}
                require
            />
            <TextInputGlobal
                label="K/C đại biểu (m):"
                name="kcDaiBieu"
                placeholder="K/C đại biểu (m)"
                value={kcDaiBieu?.toString()}
                require
            />
            {hasGocNeo && 
                <TextInputGlobal
                label="Góc néo (độ)"
                name="gocNeo"
                placeholder="Góc néo (độ)"
                value={gocNeo?.toString()}
                require
            />}
            <TextInputGlobal
                label="Số mạch:"
                name="soMach"
                placeholder="Số mạch"
                isDropdown
                value={soMach}
                onChangeDropdown={setSoMach}
                listDropdown={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ]}
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
                    text="Tính toán"
                    textColor={'white'}
                    onPress={(): void => {
                        handleSubmit();
                    }}
                    backgroundColor={'blue'}
                    borderRadius={8}
                    style={{ width: '50%' }}
                />
            </AppView>
        </AppView>
    );
}

export default Input4;