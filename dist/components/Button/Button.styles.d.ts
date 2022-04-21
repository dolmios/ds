export declare const ButtonStyled: import("@stitches/react/types/styled-component").StyledComponent<"button", import("@stitches/react/types/styled-component").StyledComponentProps<[{
    [x: string]: string | number | {
        cursor: string;
        opacity: number;
        backgroundColor?: undefined;
        color?: undefined;
        alignSelf?: undefined;
        height?: undefined;
        marginTop?: undefined;
        width?: undefined;
        fontSize?: undefined;
        block?: undefined;
        solid?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        cursor?: undefined;
        opacity?: undefined;
        alignSelf?: undefined;
        height?: undefined;
        marginTop?: undefined;
        width?: undefined;
        fontSize?: undefined;
        block?: undefined;
        solid?: undefined;
    } | {
        alignSelf: string;
        height: string;
        marginTop: string;
        width: string;
        cursor?: undefined;
        opacity?: undefined;
        backgroundColor?: undefined;
        color?: undefined;
        fontSize?: undefined;
        block?: undefined;
        solid?: undefined;
    } | {
        fontSize: string;
        cursor?: undefined;
        opacity?: undefined;
        backgroundColor?: undefined;
        color?: undefined;
        alignSelf?: undefined;
        height?: undefined;
        marginTop?: undefined;
        width?: undefined;
        block?: undefined;
        solid?: undefined;
    } | {
        block: {
            false: {
                display: string;
            };
            true: {
                display: string;
                width: string;
            };
        };
        solid: {
            false: {
                background: string;
                color: string;
            };
            true: {
                background: string;
                color: string;
            };
        };
        cursor?: undefined;
        opacity?: undefined;
        backgroundColor?: undefined;
        color?: undefined;
        alignSelf?: undefined;
        height?: undefined;
        marginTop?: undefined;
        width?: undefined;
        fontSize?: undefined;
    };
    '&:disabled': {
        cursor: string;
        opacity: number;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
    };
    alignContent: string;
    alignItems: string;
    border: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: number;
    padding: string;
    svg: {
        alignSelf: string;
        height: string;
        marginTop: string;
        width: string;
    };
    transition: string;
    variants: {
        block: {
            false: {
                display: string;
            };
            true: {
                display: string;
                width: string;
            };
        };
        solid: {
            false: {
                background: string;
                color: string;
            };
            true: {
                background: string;
                color: string;
            };
        };
    };
    verticalAlign: string;
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
export declare const ButtonIconStyled: import("@stitches/react/types/styled-component").StyledComponent<"span", {}, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
export default ButtonStyled;
//# sourceMappingURL=Button.styles.d.ts.map