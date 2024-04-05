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

export enum ORDER_PAYMENT_METHOD {
  CASH_METHOD = 0,
  TRANSFER_METHOD = 1,
}

export enum EOrdersSource {
  AffiliateMarketing = 0,
  TeleMarketing = 1,
  DigitalMarketing = 2,
  TradeMarketing = 3,
  Collap = 4,
}
