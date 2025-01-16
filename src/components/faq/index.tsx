import MinusIcon from "@/icons/MinusIcon";
import PlusIcon from "@/icons/PlusIcon";
import React, { useState } from "react";
import styled from "styled-components";

interface IFAQ {
  category: string;
  questions: { id: number; question: string; answer: string }[];
}
type IFAQGroup = IFAQ[];

function FAQ() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const faqData: IFAQGroup = [
    {
      category: "Category 1",
      questions: [
        {
          id: 1,
          question:
            "What is the purpose of this algo-stable? Why should users hold or use it?",
          answer:
            "This algo-stable is designed to provide stability and utility for users, ensuring low volatility and long-term value.",
        },
        {
          id: 2,
          question: "How does this protocol generate yields and revenue?",
          answer:
            "The protocol generates yields through staking and liquidity provision while earning revenue from transaction fees and market activity.",
        },
        {
          id: 3,
          question:
            "How does the new stablecoin ensure stability during high volatility?",
          answer:
            "It employs algorithms and collateral mechanisms to adjust supply and demand dynamically, maintaining a stable value.",
        },
      ],
    },
    {
      category: "Category 2",
      questions: [
        {
          id: 4,
          question:
            "What is the purpose of this algo-stable? Why should users hold or use it?",
          answer:
            "This algo-stable is designed to provide stability and utility for users, ensuring low volatility and long-term value.",
        },
        {
          id: 5,
          question: "How does this protocol generate yields and revenue?",
          answer:
            "The protocol generates yields through staking and liquidity provision while earning revenue from transaction fees and market activity.",
        },
        {
          id: 6,
          question:
            "How does the new stablecoin ensure stability during high volatility?",
          answer:
            "It employs algorithms and collateral mechanisms to adjust supply and demand dynamically, maintaining a stable value.",
        },
      ],
    },
  ];

  return (
    <FAQContainer>
      {faqData.map((category, categoryIndex) => (
        <Category key={categoryIndex}>
          <CategoryTitle>{category.category}</CategoryTitle>
          {category.questions.map((item) => (
            <FAQItemContainer key={item.id}>
              <FAQItemHeader onClick={() => toggleAnswer(item.id)}>
                <Question>{item.question}</Question>
                <PlusButton>
                  {expandedItem === item.id ? <MinusIcon /> : <PlusIcon />}
                </PlusButton>
              </FAQItemHeader>
              <Answer isVisible={expandedItem === item.id}>
                {item.answer}
              </Answer>
            </FAQItemContainer>
          ))}
        </Category>
      ))}
    </FAQContainer>
  );
}

export default FAQ;

const FAQContainer = styled.div``;

const Category = styled.div`
  margin-bottom: 64px;
`;

const CategoryTitle = styled.h2`
  margin-bottom: 32px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: ${({ theme }) => theme.secondaryText};
`;

const FAQItemContainer = styled.div`
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.hexToRgba(theme.primary, 0.2)};
  background: ${({ theme }) => theme.hexToRgba(theme.white, 0.8)};
  border-radius: 10px;
  overflow: hidden;
`;

const FAQItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  gap: 16px;
  &:hover {
    background: ${({ theme }) => theme.white};
  }
`;

const Question = styled.div`
  font-family: Space Grotesk;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.8px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.black};
`;

const PlusButton = styled.div`
  background: ${({ theme }) => theme.hexToRgba(theme.primary, 0.1)};
  color: ${({ theme }) => theme.primary};
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Answer = styled.div<{ isVisible: boolean }>`
  padding: 0px 32px 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
