import styled from "styled-components";

export const InputBox = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`
export const InputLabel = styled.div`
    display: flex;
    justify-content: space-between;
    .leftLabel {
        .text1 {
            color: ${(props) => props.theme.fadedWhite};
        }
        .text2 {
            color: ${(props) => props.theme.white};
        }
    }
    .rightLabel {
        .text1 {
            color: ${(props) => props.theme.fadedWhite};
            font-size: 12px;
        }
        .text2 {
            color: ${(props) => props.theme.white};
            font-size: 12px;
        }
    }
`

interface IBoxProps {
    customGap?: string,
    minWidth?: string,
    maxWidth?: string,
    maxheight?: string,
    align?: string,
    customPadding?: string,
}

export const ContainerBox = styled.div<IBoxProps>`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: ${(props: any) => props.theme.purple};
    border-radius: 10px;
    gap: ${(props: any) => props.customGap ? props.customGap : '1em'};
    flex: 1 1 0px;
    height: 100%;
    .btnWrapper {
        width: 50%;
    }
    .amountContainer {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
`
export const Divider = styled.hr`
    border: .5px solid rgba(255, 255, 255, 0.12) !important;
    width: 100%;
`

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .css-130tysn-indicatorContainer, .css-1e6ct6j-indicatorContainer {
        padding: 0 5px 0 0;
    }
`

export const ColFlex = styled.div<IBoxProps>`
    display: flex;
    flex-direction: column;
    gap: ${(props: any) => props.customGap ? props.customGap : '0.5em'};
    align-items: ${(props: any) => props.align};
    padding: ${(props: any) => props.customPadding};
    .amountContainer {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
`
export const RowFlex = styled.div<IBoxProps>`
    display: flex;
    justify-content: space-between;
    padding: ${(props: any) => props.customPadding};
    align-items: ${(props: any) => props.align};
    gap: ${(props: any) => props.customGap};

`
export const Image = styled.img`
    height: 28px;
    width: 28px;
`
export const NotifyImage = styled.img`
    height: 16px;
    width: 16px;
`
export const TranscationHeading = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
`
export const TranscationContent = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`
interface IContainerProps {
    pad?: string,
    width?: string,
}
export const Container = styled.div<IContainerProps>`
    padding: ${(props: IContainerProps) => props.pad || '0 0 50px 0'};
    width: ${(props: IContainerProps) => props.width || '80%'};
    max-width: 1100px;
`
export const FixedContainer = styled.div<IContainerProps>`
    padding: ${(props: IContainerProps) => props.pad || '0 0 50px 0'};
    width: ${(props: IContainerProps) => props.width || '80%'};
    max-width: 1100px;
`
interface ITooltipProps {
    customWidth?: string,
    customPad?: string,
}
export const Tooltip = styled.div<ITooltipProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props: any) => props.customPad};
    &:hover {
        cursor: pointer;
    }
    position:relative;
    ::before,
    ::after {
        --scale: 0;
        --arrow-size: 5px;
        --tooltip-color: ${(props: any) => props.theme.tooltipBg};
        z-index: 999;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(10px) scale(var(--scale));
    
        transition: 150ms transform;
        transform-origin: bottom center;
    }

    ::before {
        left: 15px;
        content: attr(data-tooltip);
        color: ${(props: any) => props.theme.white};
        padding: .5rem;
        border-radius: .3rem;
        text-align: center;
        width: ${(props: any) => props.customWidth || 'max-content'};
        background: var(--tooltip-color);
        font-size: 12px;
        backdrop-filter: blur(30px);
    }

    :hover::before {
        --scale: 1;
    }
    :hover::after {
        transform: rotate(90deg);
        transition: 150ms transform;
    }

    ::after {
        content: '';
        border: var(--arrow-size) solid transparent;
        border-top-color: var(--tooltip-color);
        
        transform-origin: top center;
        left: 20px;
    }
`
interface _ImageProps {
    height?: string
    width?: string
}
export const SvgIcon = styled.img<_ImageProps>`
    height: ${(props: _ImageProps) => props.height || '16px'};
    width: ${(props: _ImageProps) => props.width};
`
export const SelectActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`