"use client";

import { useState } from "react";

import { searchVerifiedCompany } from "@/features/check-registered-company/lib/searchVerifiedCompany";
import type {
  CorpCheckResult,
  VerifiedCompanySearchType,
} from "@/entities/safety/model/types";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";
import { Label } from "@/shared/ui/label/Label";
import { LoadingState } from "@/shared/ui/loading-state/LoadingState";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/tabs/Tabs";
import { CorpCheckResultPanel } from "@/features/check-registered-company/ui/CorpCheckResultPanel";

const SEARCH_TYPE_LABELS: Record<VerifiedCompanySearchType, string> = {
  businessName: "상호명",
  representativeName: "대표자명",
  adPhone: "광고용 전화번호",
};

const SEARCH_TYPE_PLACEHOLDERS: Record<VerifiedCompanySearchType, string> = {
  businessName: "예: 든든금융대부",
  representativeName: "예: 김민수",
  adPhone: "예: 02-1234-5678",
};

export type CorpCheckFormProps = {
  initialType?: VerifiedCompanySearchType;
  initialQuery?: string;
  className?: string;
};

export function CorpCheckForm({
  initialType = "businessName",
  initialQuery = "",
  className,
}: CorpCheckFormProps) {
  const [searchType, setSearchType] =
    useState<VerifiedCompanySearchType>(initialType);
  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState<CorpCheckResult>({ status: "idle" });

  const canSubmit = query.trim().length > 0 && result.status !== "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setResult({ status: "loading" });

    try {
      const company = await searchVerifiedCompany({
        type: searchType,
        query: query.trim(),
      });
      setResult(
        company ? { status: "found", company } : { status: "not_found" },
      );
    } catch {
      setResult({ status: "error" });
    }
  };

  const handleReset = () => {
    setQuery("");
    setResult({ status: "idle" });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Tabs
          value={searchType}
          onValueChange={(v) => {
            setSearchType(v as VerifiedCompanySearchType);
            setResult({ status: "idle" });
          }}
        >
          <TabsList className="grid w-full grid-cols-3">
            {(
              Object.keys(SEARCH_TYPE_LABELS) as VerifiedCompanySearchType[]
            ).map((type) => (
              <TabsTrigger key={type} value={type}>
                {SEARCH_TYPE_LABELS[type]}
              </TabsTrigger>
            ))}
          </TabsList>
          {(Object.keys(SEARCH_TYPE_LABELS) as VerifiedCompanySearchType[]).map(
            (type) => (
              <TabsContent key={type} value={type}>
                <div className="flex flex-col gap-2">
                  <Label htmlFor={`corp-check-${type}`}>
                    {SEARCH_TYPE_LABELS[type]} 입력
                  </Label>
                  <Input
                    id={`corp-check-${type}`}
                    type={type === "adPhone" ? "tel" : "text"}
                    placeholder={SEARCH_TYPE_PLACEHOLDERS[type]}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </TabsContent>
            ),
          )}
        </Tabs>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={!canSubmit}
          isLoading={result.status === "loading"}
        >
          조회하기
        </Button>
      </form>

      <div className="flex flex-col md:min-h-120">
        {result.status === "loading" && (
          <LoadingState message="등록 정보를 조회하는 중이에요" />
        )}

        {result.status !== "idle" && result.status !== "loading" && (
          <CorpCheckResultPanel result={result} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
