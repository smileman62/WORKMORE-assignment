'use client';

import { Building2, Search } from 'lucide-react';
import { useState } from 'react';

import { loanCompanyMock } from '@/entities/loan-company/model/mock';
import { cn } from '@/shared/lib/cn';
import { LoanCompanyCard } from '@/entities/loan-company/ui/LoanCompanyCard';
import { Badge } from '@/shared/ui/badge/Badge';
import { Button } from '@/shared/ui/button/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card/Card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog/Dialog';
import { EmptyState } from '@/shared/ui/empty-state/EmptyState';
import { FilterChip } from '@/shared/ui/filter-chip/FilterChip';
import { Input } from '@/shared/ui/input/Input';
import { Label } from '@/shared/ui/label/Label';
import { LoadingState } from '@/shared/ui/loading-state/LoadingState';
import { SearchBar } from '@/shared/ui/search-bar/SearchBar';
import { SectionTitle } from '@/shared/ui/section-title/SectionTitle';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select/Select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet/Sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs/Tabs';
import { AppHeader } from '@/widgets/app-header/AppHeader';
import { MobileBottomNav } from '@/widgets/mobile-bottom-nav/MobileBottomNav';

function ComponentSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title={title} description={description} />
      <div className="rounded-2xl border border-border bg-surface p-5">{children}</div>
    </section>
  );
}

function VariantRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export function TestComponentsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedChip, setSelectedChip] = useState<string | null>('서울');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <AppHeader />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-foreground">
            컴포넌트 테스트
          </h1>
          <p className="text-sm text-muted-foreground">
            공용 UI 컴포넌트의 기본·상태·반응형을 확인하는 페이지입니다.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <ComponentSection
            title="Button"
            description="variant, size, disabled, loading 상태"
          >
            <div className="flex flex-col gap-6">
              <VariantRow label="Variants">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </VariantRow>
              <VariantRow label="Sizes">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </VariantRow>
              <VariantRow label="States">
                <Button disabled>Disabled</Button>
                <Button isLoading>Loading</Button>
                <Button fullWidth>Full Width</Button>
              </VariantRow>
            </div>
          </ComponentSection>

          <ComponentSection title="Input & Label" description="기본·에러·disabled">
            <div className="flex max-w-sm flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="input-default">기본 입력</Label>
                <Input id="input-default" placeholder="업체명을 입력하세요" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="input-error">에러 상태</Label>
                <Input
                  id="input-error"
                  error
                  placeholder="필수 항목입니다"
                  defaultValue="잘못된 값"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="input-disabled">비활성화</Label>
                <Input id="input-disabled" disabled placeholder="입력 불가" />
              </div>
            </div>
          </ComponentSection>

          <ComponentSection title="Select" description="드롭다운 선택">
            <div className="max-w-sm">
              <Select defaultValue="seoul">
                <SelectTrigger>
                  <SelectValue placeholder="지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seoul">서울</SelectItem>
                  <SelectItem value="busan">부산</SelectItem>
                  <SelectItem value="incheon">인천</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentSection>

          <ComponentSection title="Badge" description="상태·라벨 표시">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentSection>

          <ComponentSection title="Card" description="정보 블록 컨테이너">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드 설명 텍스트입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  카드 본문 영역입니다.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">확인</Button>
              </CardFooter>
            </Card>
          </ComponentSection>

          <ComponentSection title="Search Bar" description="검색 입력 + 지우기">
            <div className="max-w-md">
              <SearchBar
                placeholder="업체명, 지역으로 검색"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClear={() => setSearchValue('')}
              />
            </div>
          </ComponentSection>

          <ComponentSection title="Filter Chip" description="선택·제거 가능한 필터">
            <div className="flex flex-wrap gap-2">
              {['서울', '부산', '소액대출', '비대면'].map((chip) => (
                <FilterChip
                  key={chip}
                  selected={selectedChip === chip}
                  showRemove={selectedChip === chip}
                  onClick={() =>
                    setSelectedChip(selectedChip === chip ? null : chip)
                  }
                  onRemove={() => setSelectedChip(null)}
                >
                  {chip}
                </FilterChip>
              ))}
            </div>
          </ComponentSection>

          <ComponentSection title="Tabs" description="탭 전환 UI">
            <Tabs defaultValue="region">
              <TabsList className="w-full max-w-md">
                <TabsTrigger value="region">지역별</TabsTrigger>
                <TabsTrigger value="product">상품별</TabsTrigger>
                <TabsTrigger value="custom">맞춤</TabsTrigger>
              </TabsList>
              <TabsContent value="region">
                <p className="text-sm text-muted-foreground">
                  지역별 업체 찾기 탭 콘텐츠
                </p>
              </TabsContent>
              <TabsContent value="product">
                <p className="text-sm text-muted-foreground">
                  상품별 업체 찾기 탭 콘텐츠
                </p>
              </TabsContent>
              <TabsContent value="custom">
                <p className="text-sm text-muted-foreground">
                  맞춤 검색 탭 콘텐츠
                </p>
              </TabsContent>
            </Tabs>
          </ComponentSection>

          <ComponentSection title="Dialog & Sheet" description="모달·바텀시트">
            <div className="flex flex-wrap gap-3">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Dialog 열기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>정식 업체 조회</DialogTitle>
                    <DialogDescription>
                      상담 전 업체의 등록 여부를 확인하세요.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                    >
                      닫기
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      조회하기
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline">Sheet 열기</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>필터</SheetTitle>
                    <SheetDescription>
                      조건을 선택해 업체를 좁혀보세요.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <FilterChip selected>서울</FilterChip>
                    <FilterChip>부산</FilterChip>
                    <FilterChip>소액대출</FilterChip>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </ComponentSection>

          <ComponentSection
            title="Empty & Loading State"
            description="빈 결과·로딩 UI"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <EmptyState
                icon={Search}
                title="조건에 맞는 업체를 찾지 못했어요"
                description="지역이나 상품 조건을 조금 넓혀보세요."
                action={{ label: '조건 초기화' }}
              />
              <LoadingState message="업체 목록을 불러오는 중이에요" />
            </div>
          </ComponentSection>

          <ComponentSection
            title="Loan Company Card"
            description="업체 카드 (entities)"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {loanCompanyMock.map((company) => (
                <LoanCompanyCard key={company.id} company={company} />
              ))}
            </div>
          </ComponentSection>

          <ComponentSection
            title="Header & Bottom Navigation"
            description="페이지 상단·모바일 하단 네비 (현재 페이지에 적용됨)"
          >
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>
                <Building2 className="mr-1 inline h-4 w-4" />
                AppHeader는 페이지 상단에, MobileBottomNav는 모바일 하단에
                표시됩니다.
              </p>
              <p>PC(md 이상)에서는 하단 네비게이션이 숨겨집니다.</p>
            </div>
          </ComponentSection>

          <ComponentSection title="Color Tokens" description="디자인 시스템 색상">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { name: 'Primary', class: 'bg-primary' },
                { name: 'Muted', class: 'bg-muted' },
                { name: 'Success', class: 'bg-success' },
                { name: 'Warning', class: 'bg-warning' },
                { name: 'Danger', class: 'bg-danger' },
                { name: 'Surface', class: 'bg-surface border border-border' },
                { name: 'Border', class: 'bg-border' },
                { name: 'Foreground', class: 'bg-foreground' },
              ].map((color) => (
                <div key={color.name} className="flex flex-col gap-1.5">
                  <div className={cn('h-12 rounded-xl', color.class)} />
                  <span className="text-xs text-muted-foreground">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </ComponentSection>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
