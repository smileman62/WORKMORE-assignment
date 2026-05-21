import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  Clock,
  Globe,
  Home,
  Landmark,
  LayoutGrid,
  MessageSquare,
  RefreshCw,
  Shield,
  Smartphone,
  Store,
  User,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

import type { ProductFilterOption } from '@/entities/loan-company/model/constants';

const DEFAULT_ICON = LayoutGrid;

export const SEARCH_PRODUCT_ICONS: Record<ProductFilterOption, LucideIcon> = {
  직장인대출: Briefcase,
  무직자대출: User,
  여성대출: UserRound,
  비상금대출: Wallet,
  모바일대출: Smartphone,
  소액대출: Banknote,
  무방문대출: Home,
  자영업자대출: Store,
  당일대출: Clock,
  사업자대출: Building2,
  전문직대출: Landmark,
  저신용자대출: Shield,
  신용대출: Banknote,
  추가대출: Banknote,
  자동차대출: Car,
  부동산대출: Home,
  생활비대출: Wallet,
  온라인대출: Globe,
  일용직대출: Users,
  프리랜서대출: Briefcase,
  전당포대출: Store,
  비대면대출: MessageSquare,
  주부대출: UserRound,
  회생파산대출: RefreshCw,
  대환대출: RefreshCw,
  기타대출: LayoutGrid,
};

export function getSearchProductIcon(product: string): LucideIcon {
  return (
    SEARCH_PRODUCT_ICONS[product as ProductFilterOption] ?? DEFAULT_ICON
  );
}
