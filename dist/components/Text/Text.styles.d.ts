export declare const TextStyled: import("@stitches/react/types/styled-component").StyledComponent<"div", import("@stitches/react/types/styled-component").StyledComponentProps<[{
    '&:last-child': {
        marginBottom: string;
    };
    display: string;
    variants: {
        bold: {
            false: {
                fontWeight: string;
            };
            true: {
                fontWeight: string;
            };
        };
        size: {
            h1: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h2: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h3: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h4: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h5: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h6: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                opacity: string;
            };
            p: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            small: {
                [x: string]: string | {
                    marginBottom: string;
                    fontSize?: undefined;
                } | {
                    fontSize: string;
                    marginBottom?: undefined;
                };
                '&:not(:last-child)': {
                    marginBottom: string;
                };
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            span: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
        };
    };
}]>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        background: string;
        blueBorder: string;
        blueOverlay: string;
        blueText: string;
        border: string;
        greenBorder: string;
        greenOverlay: string;
        greenText: string;
        orangeBorder: string;
        orangeOverlay: string;
        orangeText: string;
        overlay: string;
        overlayActive: string;
        overlayHover: string;
        pinkBorder: string;
        pinkOverlay: string;
        pinkText: string;
        purpleBorder: string;
        purpleOverlay: string;
        purpleText: string;
        redBorder: string;
        redOverlay: string;
        redText: string;
        text: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fontWeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    fonts: {
        default: string;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        p: string;
        small: string;
    };
    media: {
        desktop: string;
        desktopX: string;
        laptop: string;
        laptopX: string;
        phone: string;
        tablet: string;
        tabletX: string;
        wide: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
    };
    transitions: {
        default: string;
    };
    zIndices: {
        dialog: number;
        popover: number;
        toast: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    desktop: (value: unknown) => {
        [x: string]: unknown;
    };
    desktopX: (value: unknown) => {
        [x: string]: unknown;
    };
    hidden: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: {
            display: string;
        };
    };
    hiddenInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    laptop: (value: unknown) => {
        [x: string]: unknown;
    };
    laptopX: (value: unknown) => {
        [x: string]: unknown;
    };
    phone: (value: unknown) => {
        [x: string]: unknown;
    };
    tablet: (value: unknown) => {
        [x: string]: unknown;
    };
    tabletX: (value: unknown) => {
        [x: string]: unknown;
    };
    visible: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    visibleInline: (value: "desktop" | "desktopX" | "phone" | "tablet" | "tabletX" | "laptop" | "laptopX" | "wide") => {
        [x: string]: string | {
            display: string;
        };
        display: string;
    };
    wide: (value: unknown) => {
        [x: string]: unknown;
    };
}>>;
export default TextStyled;
//# sourceMappingURL=Text.styles.d.ts.map