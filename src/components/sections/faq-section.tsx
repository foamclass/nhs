"use client";

import { useState, useTransition, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { answerInvestorQuestions, AnswerInvestorQuestionsInput } from "@/ai/flows/answer-investor-questions";
import { Loader2, MessageCircleQuestion, Sparkles } from "lucide-react";
import { ScrollFadeIn } from "../common/scroll-fade-in";

const predefinedFaqs = [
  {
    question: "What is the total estimated cost of the project?",
    answer: "The total estimated cost is [Placeholder: $X Million]. A detailed breakdown is available in the investor brochure.",
  },
  {
    question: "What are the projected returns for investors?",
    answer: "Projected ROIs vary based on the investment model (Lease, Equity, Operations). We project competitive returns, detailed in our financial forecasts. Please see the Investment Opportunities page or download our brochure.",
  },
  {
    question: "What is the timeline for project completion?",
    answer: "The project is planned in phases. Phase 1 (groundwork and initial infrastructure) is expected to complete by [Placeholder: QX YYYY]. Full operational launch is targeted for [Placeholder: QX YYYY].",
  },
  {
    question: "How will the project impact the local community?",
    answer: "Beyond healthcare, the project will create thousands of jobs, boost local economy, improve infrastructure, and provide educational opportunities, significantly uplifting the community.",
  },
];

// This will be the context provided to the AI.
// In a real application, this might be dynamically fetched or a more comprehensive summary.
const WEBSITE_CONTEXT_FOR_AI = undefined; // Will be set dynamically

export default function FaqSection() {
  const [customQuestion, setCustomQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [websiteContent, setWebsiteContent] = useState<string>("");

  // Fetch website content from API route on mount
  useEffect(() => {
    fetch("/api/website-content")
      .then((res) => res.json())
      .then((data) => {
        // Combine all page content into a single string for context
        const combined = data.content.map((c: any) => c.content).join("\n\n");
        setWebsiteContent(combined);
      })
      .catch(() => {
        setWebsiteContent("");
      });
  }, []);

  const handleCustomQuestionSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!customQuestion.trim()) {
      toast({ title: "Error", description: "Please enter a question.", variant: "destructive" });
      return;
    }

    setAiAnswer("");
    startTransition(async () => {
      try {
        const input: AnswerInvestorQuestionsInput = {
          question: customQuestion,
          websiteContent: websiteContent, // Use fetched content
        };
        const result = await answerInvestorQuestions(input);
        setAiAnswer(result.answer);
      } catch (error) {
        console.error("Error getting AI answer:", error);
        toast({
          title: "Error",
          description: "Could not get an answer. Please try again later.",
          variant: "destructive",
        });
        setAiAnswer("Sorry, I encountered an error trying to answer your question.");
      }
    });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary" id="faq">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Investor Questions Answered
        </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollFadeIn className="space-y-6" delay="0ms">
            <h3 className="font-headline text-2xl font-semibold text-primary flex items-center gap-2">
              <MessageCircleQuestion className="h-7 w-7" />
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full bg-card p-6 rounded-xl shadow-lg">
              {predefinedFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollFadeIn>

          <ScrollFadeIn className="space-y-6" delay="200ms">
             <h3 className="font-headline text-2xl font-semibold text-primary flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-accent" />
              Ask Our AI Assistant
            </h3>
            <form onSubmit={handleCustomQuestionSubmit} className="space-y-4 bg-card p-6 rounded-xl shadow-lg">
              <div>
                <Label htmlFor="customQuestion" className="text-sm font-medium">
                  Have a specific question?
                </Label>
                <Textarea
                  id="customQuestion"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="Type your question here... e.g., 'What are the key risk factors?'"
                  className="mt-1 min-h-[100px] bg-background"
                  disabled={isPending}
                />
              </div>
              <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Answer...
                  </>
                ) : (
                  "Ask AI"
                )}
              </Button>
            </form>
            {aiAnswer && (
              <div className="mt-4 bg-background p-4 rounded-md border border-border shadow-sm">
                <h4 className="font-semibold text-primary mb-2">AI Generated Answer:</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{aiAnswer}</p>
              </div>
            )}
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
