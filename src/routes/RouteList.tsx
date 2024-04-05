// Screen
import React, {ReactElement} from 'react';
import Profile from 'src/components/Profile';
export type AppRootParamList = {
  // Public
  LoginRoute: {param?: {from: string}} | undefined;
  RegisterRoute: {param: {from: string}} | undefined;
  ForgotPasswordRoute: {from: string | undefined};
  //
  ManageOrderRoute: undefined;

  ProfileRoute: undefined;
  NewsRoute: undefined;
  NotificationsRoute: undefined;
  //
  ConfirmOtpRoute: {
    data: {
      email: string;
      password: string;
      role: number;
      username: string;
      company_name?: string;
      skill_group_id?: number;
      address?: string;
      firstname?: string;
      phone?: string;
    };
    from?: string;
    isEmployer?: boolean;
  };
  ConfirmOtpRouteForgotPassword: {email: string; role: number};
  NewPassWordRoute: {email: string; from: boolean | undefined};
  // EditProfileRoute: {inforUser?: IUser; dataCache?: IProfile};
  // ViewProfileRoute: {inforUser?: IUser; dataCache?: IProfile};
  CreateButtonRoute: undefined;
  CreateAffiliateOrderRoute: {
    actionType: string;
    idAffiliateOrder?: number;
  };
  CreateTradeMKTOrderRoute: {
    actionType: string;
    idMarketingOrder?: number;
  };
  HistoryCompletedOrderRoute: undefined;
  PendingOrderRoute: undefined;
  HistoryOrderRoute: {id?: number};
  PendingOrderDetailRoute: {
    id?: number;
    queryKey: string;
    jumpTo?: (key: string) => void;
    customerId?: number;
  };
  ProcessingOrderDetailRoute: {
    id: number;
    queryKey: string;
    jumpTo?: (key: string) => void;
    customerId?: number;
  };
  SearchRoute: {from: string};
  SearchNewsRoute: {routeFrom?: string; valueSearchTagName?: string};
  ListProductRoute: {
    data: {
      typeName: string;
      nameProduct: string;
      productCode: string;
      price: string;
      quantity: string;
    }[];
    id?: number;
  };
  ListPacketsRoute: {id: number; isPacketExtra: boolean};
  TabListProductsRoute: {
    data?: {
      // typeName: string;
      nameProduct: string;
      productCode: string;
      price: string;
      quantity: number;
    }[];
    id?: number;
    isPacketExtra?: boolean;
  };
  TabManageMyCouponRoute: undefined;
  DetailMyCouponCreatedRoute: {
    // dataItem: ISingleAndDailyRequestFormItem;
    typeRequestForm: string;
  };
  OpeningRoute: undefined;
  SeeMoreInforCustomerRoute: {
    customerId?: number;
    technicalExpertsId: number;
    orderId: any;
  };
  OnboardingRoute: undefined;
  TechnicalStaffInventoryRoute: {route?: string} | undefined;
  ListProductInventoryRoute: undefined;
  SingleRequestRoute: undefined;
  DetailsStatisticRoute: {bodyDataDate: any};
  PreviewBillRoute: {
    // dataBill?: IListOrderTechnicalStaffItem;
    idOrder: number;
    jumpTo?: (key: string) => void;
    paymentMethods?: number;
    totalMoney?: any;
    invoiceNumber?: string;
    totalMoneyDiscount?: string;
    reasonForDiscount?: string;
    contractNumber?: string;
    coreReplacementTime?: Date;
    currentLocation: {
      lat?: number;
      lon?: number;
    };
  };
  MyCouponRequestRoute: undefined;
  ListReturnProductRoute: undefined;
  TechnicalStaffNoteRoute: {
    selectComment?: boolean;
    idOrder?: number;
    customerId?: number;
    queryKey: string;
  };
  GuranteeRoute: {
    IddataOrderItem?: any;
    queryKey: string;
  };
  CheckinStatisticRoute: undefined;
  FeedbackRoute: undefined;
  DetailNewsRoute: {id?: number; queryId: number; queryTitle: string};
  ErrorCodeDetailRoute: {
    id?: number;
    queryId?: number;
  };
  QRScannerRoute: undefined;
  ResponseDetailRoute: {
    data: IFeedbackDetail;
  };
  DetailAffiliateOrderRoute: {
    // dataItem: IAffiliateItem;
  };
  CreateErrorCodeNewsRoute: undefined;
  CreateResponseRoute: undefined;
  ResponseRoute: undefined;
  ErrorCodeNewsRoute: undefined;
  MyErrorCodeNewsRoute: undefined;
  MyErrorCodeNewsDetailRoute: {
    idMyErrorCode: number;
    companyId: number;
  };
  CommentNewsRoute: {
    idErrorCodeNews?: number;
    autoFocus: boolean;
    titleErrorNews?: string;
  };
  FilterTagsRoute: {
    companyId: number;
    listErrorNewsTagIds: any;
    addErrorNewsTagIds: any;
  };
  StatisticTradeMKTOrderRoute: {
    actionType: string;
  };
  TradeMarketingOrderRoute: {
    actionType: string;
  };
  CreateCollaboratorRegisterRoute: undefined;
  CreateCollaboratorOrderRoute: {
    type?: string;
    dataDetailItem?: ICollaboratorItem;
  };
  CollaboratorOrderListRoute: undefined;
  DetailCollaboratorOrderRoute: {
    dataItem: ICollaboratorItem;
  };
  ViewCollaboratorStatisticRoute: undefined;
  DetailCollaboratorStatisticRoute: undefined;
  OrderStatisticRoute: {
    ordersSource?: number;
  };
  RankStatisRoute: undefined;
  CollaboratorsRoute: undefined;

  RulesRoute: {param?: {title: string}} | undefined;
  RolesRoute: any;
  DetailPodCast: {item: any};
};
// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
interface IRoute {
  component: React.ComponentType<ReactElement>;
  name: string;
  title: string;
  icon?: string;
  isBottom?: boolean;
  isPrivate?: boolean;
  isAuth?: boolean;
  isTechnicalStaff?: boolean;
  isCollaborator?: boolean;
}
const routes: IRoute[] = [
  // bottom tab
  {
    component: Profile,
    name: 'ProfileRoute',
    title: 'Cá nhân',
    icon: 'User',
    isBottom: true,
    isPrivate: false,
    isCollaborator: true,
  },
];

export default routes;
