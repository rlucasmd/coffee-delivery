import styled from "styled-components";

interface TitleTextProps{
  size?: "xl" | "l" | "m" | "s" | "xs";
  color? : "title" | "subtitle" | "text";
  weight? : string | number;
}

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "title" | "subtitle" | "label";
  weight?: string | number;
}

const Title = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 130%;
`;

const Text = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "label"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size ?? "m"}`]};
  font-weight: ${({ weight }) => weight ?? 400};
  line-height: 130%;
`;

export {Title, Text};