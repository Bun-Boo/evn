// import mienhocTa from 'src/assets/images/mienhocthiTA.png';

import RouteName from 'src/routes/RouteName';

const mienhocTa = require('src/assets/images/mienhocthiTA.png');
const phucKhao = require('src/assets/images/phuckhao.png');
const lichThi = require('src/assets/images/lichthi.png');
const dkthilai = require('src/assets/images/dangkythi.png');
const hoanthi = require('src/assets/images/hoanthi.png');
const huydkthilai = require('src/assets/images/huydkthilai.png');
const ketquahoctap = require('src/assets/images/ketquahoctap.jpeg');
const MC_KT = require('src/assets/images/MC_KT.png');
const MC_DT = require('src/assets/images/MC_DT.png');
const MC_CTSV = require('src/assets/images/MC_CTSV.png');
const MC_HC = require('src/assets/images/MC_HC.png');
const TTHCSV = require('src/assets/images/TTHCSV.png');

const MC_DT_bang_diem = require('src/assets/images/MC_DT/bang_diem.png');
const MC_DT_xac_nhan = require('src/assets/images/MC_DT/xac_nhan.png');
const MC_DT_dk_tot_nghiep = require('src/assets/images/MC_DT/dk_tot_nghiep.png');
const MC_DT_cap_ban_sao = require('src/assets/images/MC_DT/cap_ban_sao.png');
const MC_DT_sua_thong_tin = require('src/assets/images/MC_DT/sua_thong_tin.png');
const MC_DT_mien_chung_chi = require('src/assets/images/MC_DT/mien_chung_chi.png');
const MC_DT_chuyen_diem = require('src/assets/images/MC_DT/chuyen_diem.png');
const MC_DT_email = require('src/assets/images/MC_DT/email.png');
const MC_DT_lop_chat_luong = require('src/assets/images/MC_DT/lop_chat_luong.png');

const MC_CTCTSV_xac_nhan = require('src/assets/images/MC_CTCTSV/xacnhan.png');
const MC_CTCTSV_qua_trinh_hoc = require('src/assets/images/MC_CTCTSV/quatrinhhoc.png');
const MC_CTCTSV_nghi_hoc_tam_thoi = require('src/assets/images/MC_CTCTSV/nghihoctamthoi.png');
const MC_CTCTSV_xin_chuyen = require('src/assets/images/MC_CTCTSV/xinchuyen.png');
export interface IDataMotCua {
  khaothi: {
    id: number;
    title: string;
    subTitle: string;
    image: string | null;
    route?: string;
  }[];
  daotao: {
    id: number;
    title: string;
    subTitle: string;
    image: string | null;
    route?: string;
  }[];
  ctctsv: {
    id: number;
    title: string;
    subTitle: string;
    image: string | null;
    route?: string;
  }[];
  hanhchinh: {
    id: number;
    title: string;
    subTitle: string;
    image: string | null;
    route?: string;
  }[];
}

export const DATA_HOME = [
  {
    id: 0,
    title: 'Thủ tục hành chính sinh viên',
    subTitle:
      '(Tiếp nhận các đề nghị; Lịch học; Lịch thi; Kết quả học tập; Đăng ký học tập; Đăng ký cấp/xác nhận giấy giờ ...)',
    image: TTHCSV,
    route: 'ThuTucHanhChinhSVRoute',
  },
];
export const DATA_THU_TUC_HCSV = [
  {
    id: 0,
    title: 'Một cửa - Khảo thí',
    subTitle:
      '(Tiếp nhận; Đăng ký thi lại; Huỷ đăng ký thi lại; Hoãn thi; Lịch thi; Miễn học thi Tiếng Anh; Phúc khảo; Kết quả học tập)',
    image: MC_KT,
    route: 'MC_KT_Route',
  },
  {
    id: 1,
    title: 'Một cửa - Đào tạo',
    subTitle:
      '(Tiếp nhận; Bảng điểm; Cấp bản sao; Chuyển điểm; Đăng ký tốt nghiệp(xét, thi, hoãn); Miễn chứng chỉ; Xác nhận; Sửa thông tin (văn bằng, chứng chỉ))',
    image: MC_DT,
    route: 'MC_DT_Route',
  },
  {
    id: 2,
    title: 'Một cửa - CT&CTSV',
    subTitle:
      '(Tiếp nhận; Cấp lại; Nghỉ học tạm thời; Quá trình học tập; Xin chuyển; Xác nhận)',
    image: MC_CTSV,
    route: 'MC_CTCTSV_Route',
  },
  {
    id: 3,
    title: 'Một cửa - Hành chính',
    subTitle: '(Tiếp nhận; Giấy giới thiệu)',
    image: MC_HC,
    route: 'MC_HC_Route',
  },
];

export const DATA_MOTCUA: IDataMotCua = {
  khaothi: [
    {
      id: 0,
      title: 'Miễn học, thi tiếng anh',
      subTitle:
        '(Xin miễn học, miễn thi học phần đã đăng ký trong cùng học kỳ)',
      image: mienhocTa,
      route: RouteName.MienHocThiTA,
    },
    {
      id: 1,
      title: 'Phúc khảo',
      subTitle: '( Phúc khảo bài thi lần 1; Phúc khảo bài thi lại )',
      image: phucKhao,
      route: RouteName.PhucKhao,
    },
    {
      id: 2,
      title: 'Lịch thi',
      subTitle: '(Xem lịch thi; Trùng lịch thi; Không có lịch thi...)',
      image: lichThi,
      route: RouteName.LichThi,
    },
    {
      id: 3,
      title: 'Đăng ký thi lại',
      subTitle:
        '(Trùng lịch thi; Lỗi website sinhvien.uneti.edu.vn; Khác hệ, loại hình đào tạo; Thi không theo kế hoạch; Lý do khác)',
      image: dkthilai,
      route: RouteName.DKThiLai,
    },
    {
      id: 4,
      title: 'Hoãn thi',
      subTitle:
        '(Đi viện hoặc theo yêu cầu của bác sĩ; Thực hiện nhiệm vụ nhà trường giao; Lý do khác)',
      image: hoanthi,
      route: RouteName.HoanThi,
    },
    {
      id: 5,
      title: 'Huỷ đăng ký thi lại',
      subTitle:
        '(Đạt điểm học phần sau khi phúc khảo; Điều chỉnh điểm thường kỳ (quá trình); Huỷ đăng ký thi lại để học lại; Lý do khác)',
      image: huydkthilai,
      route: RouteName.HuyDKThiLai,
    },
    {
      id: 6,
      title: 'Kết quả học tập',
      subTitle:
        '(Xem kết quả học tập; Điều chỉnh, bổ sung điểm thường kỳ; Điều chỉnh, bổ sung điểm thi)',
      image: ketquahoctap,
      route: RouteName.KQHocTap,
    },
  ],
  daotao: [
    {
      id: 0,
      title: 'Bảng điểm',
      subTitle:
        '(Cấp bảng điểm tạm thời hệ 4, hệ 10; Cấp bảng điểm tốt nghiệp hệ 4, hệ 10)',
      image: MC_DT_bang_diem,
      route: RouteName.BangDiem,
    },
    {
      id: 1,
      title: 'Xác nhận',
      subTitle: '(Xác nhận đang chờ xét tốt nghiệp; Xác nhận nợ môn (Chưa tốt nghiệp); Xác nhận hoàn thành khoá học; Xác nhận thời khoá biểu theo học kỳ)',
      image: MC_DT_xac_nhan,
      route: RouteName.XacNhan,
    },
    {
      id: 2,
      title: 'Đăng ký tốt nghiệp',
      subTitle: '(Xét tốt nghiệp; Thi tốt nghiệp; Hoãn xét tốt nghiệp)',
      image: MC_DT_dk_tot_nghiep,
      route: RouteName.DKTotNghiep,
    },
    {
      id: 3,
      title: 'Cấp bản sao',
      subTitle: '(Cấp bản sao từ sổ gốc cấp bằng tốt nghiệp)',
      image: MC_DT_cap_ban_sao,
    },
    {
      id: 4,
      title: 'Sửa thông tin',
      subTitle: '(Sửa thông tin văn bằng; Sửa thông tin chứng chỉ)',
      image: MC_DT_sua_thong_tin,
    },
    {
      id: 5,
      title: 'Miễn chứng chỉ',
      subTitle: '(Miễn chứng chỉ tiếng anh; Miễn chứng chỉ Gíao dục Quốc phòng - An ninh)',
      image: MC_DT_mien_chung_chi,
    },
    {
      id: 6,
      title: 'Chuyển điểm',
      subTitle: '(Chuyển điểm học phần tương đương; Chuyển trường (từ trường khác về); Chuyển điểm khác hệ đào tạo)',
      image: MC_DT_chuyen_diem,
      route: RouteName.ChuyenDiem,
    },
    {
      id: 7,
      title: 'Tài khoản EMAIL / LMS',
      subTitle: '(Tài khoản Email UNETI; Tài khoản LMS)',
      image: MC_DT_email,
      route: RouteName.TaiKhoanEmailLMS,
    },
    {
      id: 8,
      title: 'Lớp chất lượng',
      subTitle: '(Lớp học chất lượng)',
      image: MC_DT_lop_chat_luong,
      route: RouteName.LopChatLuong,
    },
  ],
  ctctsv: [
    {
      id: 0,
      title: 'Xác nhận',
      subTitle: '(Làm vé tháng xe bus; Đang học tại trường; Thuê nhà ở sinh viên; Cấp lại thẻ BHYT; Đối tượng chính sách; Sổ ưu đãi; Vay vốn)',
      image: MC_CTCTSV_xac_nhan,
      route: RouteName.XacNhanCTSV,
    },
    {
      id: 1,
      title: 'Quá trình học',
      subTitle: '(Bảo lưu kết quả học tập; Xin thôi học; Trở lại học tập)',
      image: MC_CTCTSV_qua_trinh_hoc,
    },
    {
      id: 2,
      title: 'Nghỉ học tạm thời',
      subTitle: '(Xin nghỉ học để điều trị bệnh)',
      image: MC_CTCTSV_nghi_hoc_tam_thoi,
    },
    {
      id: 3,
      title: 'Xin chuyển',
      subTitle: '(Địa điểm học; Trường học)',
      image: MC_CTCTSV_xin_chuyen,
    },
  ],
  hanhchinh: [
    {
      id: 0,
      title: 'Giấy giới thiệu',
      subTitle: '(Xin miễn học, miễn thi học phần đã đăng ký)',
      image: 'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX',
    },
  ],
};

export const RULES_KHAOTHI = {
  TA: {
    rule: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
    ],
    route: 'mienhocTARoute',
  },
  phuckhao: {
    rule: [
      '- Người học thực hiện phúc khảo kết quả bài thi theo kế hoạch tổ chức thi ( Ngày nộp đơn phúc khảo ) trong từng học kỳ.',
      '- Lệ phí phúc khảo kết quả học tập: Có mức thu theo quy định, được chuyển trực tiếp vào công nợ, người học nộp cùng học phí kỳ kế tiếp.',
    ],
    route: 'PhucKhaoRoute',
  },
  lichthi: {
    rule: [
      '* Nếu người học cần đề nghị giải quyết các vấn đề sau :',
      '1. Xem lịch thi (cho phép đề nghị trực tuyến)',
      '2. Trùng lịch thi (cho phép đề nghị trực tuyến)',
      '3. Không có lịch thi (cho phép đề nghị trực tuyến)',
    ],
    route: 'LichThiRoute',
  },
  dangkythilai: {
    rule: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
    ],
    route: 'mienhocTARoute',
  },
  hoanthi: {
    rule: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
    ],
    route: 'mienhocTARoute',
  },
  huydkthilai: {
    rule: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
    ],
    route: 'mienhocTARoute',
  },
  kqht: {
    rule: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus delectus, aliquid illum dolor qui recusandae iste officia nulla facilis accusamus sequi culpa ex eum nemo corporis perspiciatis aspernatur deleniti?',
    ],
    route: 'mienhocTARoute',
  },
};

export const RULES_DAOTA0 = {
  bangdiem: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
  xacnhan: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'phuckhaoRoute',
  },
  dktotnghiep: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
  capbansao: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
  suathongtin: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
  mienchungchi: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
  chuyendiem: {
    rule: [
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
      'Theo đặc phái viên TTXVN, nhân dịp dự Tuần lễ Cấp cao Đại hội đồng Liên hợp quốc khóa 78, chiều 21/9 (giờ địa phương), tại trụ sở Liên hợp quốc, Thủ tướng Chính phủ Phạm Minh Chính đã gặp Tổng Thư ký Liên hợp quốc Antonio Guterres.',
    ],
    route: 'mienhocTARoute',
  },
};
export const RULES_CTSV = {
  xacnhan: {
    rule: [
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
    ],
    route: 'mienhocTARoute',
  },
  quatrinhhoc: {
    rule: [
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
    ],
    route: 'phuckhaoRoute',
  },
  nghihoctamthoi: {
    rule: [
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
    ],
    route: 'mienhocTARoute',
  },
  xinchuyen: {
    rule: [
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
      'Tối 21/9, lực lượng chức năng phát hiện một thi thể nữ giới giống với Trang ở sông Đuống. Lực lượng chuyên môn đang thực hiện các công tác giám định, khám nghiệm để xác định tử thi này có phải là Trang hay không.',
    ],
    route: 'mienhocTARoute',
  },
};
export const RULES_HANHCHINH = {
  giaygioithieu: {
    rule: [
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
      'Dự thảo công văn yêu cầu đảm bảo về nội dung thu (định danh), tên các khoản thu dịch vụ phục vụ, hỗ trợ hoạt động giáo dục (không bao gồm học phí) phải đảm bảo đúng tên của 26 nội dung khoản thu, thuộc 4 nhóm theo phân loại.',
    ],
    route: 'mienhocTARoute',
  },
};

export const RULES = {
  khaothi: {
    0: {rule: RULES_KHAOTHI.TA.rule, route: RULES_KHAOTHI.TA.route},
    1: {rule: RULES_KHAOTHI.phuckhao.rule, route: RULES_KHAOTHI.phuckhao.route},
    2: {rule: RULES_KHAOTHI.lichthi.rule, route: RULES_KHAOTHI.lichthi.route},
    3: {
      rule: RULES_KHAOTHI.dangkythilai.rule,
      route: RULES_KHAOTHI.dangkythilai.route,
    },
    4: {rule: RULES_KHAOTHI.hoanthi.rule, route: RULES_KHAOTHI.hoanthi.route},
    5: {
      rule: RULES_KHAOTHI.huydkthilai.rule,
      route: RULES_KHAOTHI.huydkthilai.route,
    },
    6: {rule: RULES_KHAOTHI.kqht.rule, route: RULES_KHAOTHI.kqht.route},
    // ... add other cases here
  },
  daotao: {
    0: {rule: RULES_DAOTA0.bangdiem.rule, route: RULES_DAOTA0.bangdiem.route},
    1: {rule: RULES_DAOTA0.xacnhan.rule, route: RULES_DAOTA0.xacnhan.route},
    2: {
      rule: RULES_DAOTA0.dktotnghiep.rule,
      route: RULES_DAOTA0.dktotnghiep.route,
    },
    3: {rule: RULES_DAOTA0.capbansao.rule, route: RULES_DAOTA0.capbansao.route},
    4: {
      rule: RULES_DAOTA0.suathongtin.rule,
      route: RULES_DAOTA0.suathongtin.route,
    },
    5: {
      rule: RULES_DAOTA0.mienchungchi.rule,
      route: RULES_DAOTA0.mienchungchi.route,
    },
    6: {
      rule: RULES_DAOTA0.chuyendiem.rule,
      route: RULES_DAOTA0.chuyendiem.route,
    },
    // ... add other cases here
  },
  ctctsv: {
    0: {rule: RULES_CTSV.xacnhan.rule, route: RULES_CTSV.xacnhan.route},
    1: {rule: RULES_CTSV.xacnhan.rule, route: RULES_CTSV.xacnhan.route},
    2: {
      rule: RULES_CTSV.quatrinhhoc.rule,
      route: RULES_CTSV.quatrinhhoc.route,
    },
    3: {
      rule: RULES_CTSV.nghihoctamthoi.rule,
      route: RULES_CTSV.nghihoctamthoi.route,
    },
    4: {
      rule: RULES_CTSV.xinchuyen.rule,
      route: RULES_CTSV.xinchuyen.route,
    },
    // ... add other cases here
  },
  hanhchinh: {
    0: {
      rule: RULES_HANHCHINH.giaygioithieu.rule,
      route: RULES_HANHCHINH.giaygioithieu.route,
    },
    // ... add other cases here
  },
  // ... add other queryKeys here
};
