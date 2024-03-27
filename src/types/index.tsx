export enum CommonAction {
  VIEW = 'view',
  DELETE = 'delete',
  EDIT = 'edit',
  CREATE = 'create',
  CREATE_WITH_PREVIOUS_DATA = 'create_with_previous_data',
}

export enum COLLABORATOR_ORDER_STATE {
  DELETED = 0,
  CANCEL = 1,
  WAIT_ACCEPT = 2,
  ACCEPTED = 3,
  PROCESSING = 4,
  COMPLETED = 5,
}

export enum TAB_STATE_STRING {
  KHAO_THI = 'khaothi',
  DAO_TAO = 'daotao',
  CT_CTSV = 'ctctsv',
  HANH_CHINH = 'hanhchinh',
}
export enum TAB_STATE_STRING_TITLE {
  KHAO_THI = 'Khảo thí',
  DAO_TAO = 'Đào tạo',
  CT_CTSV = 'CT & CTSV',
  HANH_CHINH = 'Hành chính',
}

export enum ORDER_STATE_NUMBER {
  PENDING_ORDER = 3,
  PROCESSING_ORDER = 6,
  COMPLETED_ORDER = 8,
  CANCEL_ORDER = 1,
  REFUND_ORDER = 4,
  TAKEN_CARE_ORDER = 7,
}

export enum ORDER_IMAGE_UPLOAD_TYPE {
  IMAGE_PROOF_ORDER = 0,
  IMAGE_BILL_ORDER = 1,
}

export enum ORDER_IMAGE_UPLOAD_TYPE_STRING {
  IMAGE_ORDER = 'imageOrder',
  IMAGE_BILL_ORDER = 'imageBillOrder',
  IMAGE_CONTRACT_ORDER = 'imageContract',
}

export enum ORDER_PAYMENT_METHOD {
  CASH_METHOD = 0,
  TRANSFER_METHOD = 1,
}

export enum TRADE_MARKETING_STATE_NUMBER {
  CANCEL_ORDER = 1, // Đơn đã hủy
  INACTIVE_ORDER = 2, // Đơn mới
  ACTIVE_ORDER = 3, // Đơn đã phân phối
  NOTACCEPT_ORDER = 4, // NVKD từ chối
  RECEIVE_ORDER = 5, // Sale admin nhận đơn
  PROCESSING_ORDER = 6, // NVKD chấp nhận đơn và đang thực hiện
  TAKECARED_ORDER = 7, // Đơn đã chăm sóc
  DONE_ORDER = 8, // Đơn hoàn thành
}
export enum AFFILIATE_STATE_NUMBER {
  INACTIVE_ORDER = 2, // Đơn mới
  AFFILIATE_CREATE_ORDER = 10, // Đơn aff tạo
}

export enum EOrdersSource {
  AffiliateMarketing = 0,
  TeleMarketing = 1,
  DigitalMarketing = 2,
  TradeMarketing = 3,
  Collap = 4,
}
