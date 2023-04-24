import createTheme from "../js/createTheme";
import convertHexToRgba from "../js/convertHexToRgba";

const palette = {
  blue: {
    dark: "#005AA3",
    darkActive: "#003E70",
    darkHover: "#004F8F",
    darker: "#004680",
    light: "#E8F4FD",
    lightActive: "#C7E4FA",
    lightHover: "#DEF0FC",
    normal: "#0172CB",
    normalActive: "#01508E",
    normalHover: "#0161AC",
  },
  cloud: {
    dark: "#BAC7D5",
    darkActive: "#94A8BE",
    darkHover: "#A6B6C8",
    light: "#F5F7F9",
    lightActive: "#D6DEE6",
    lightHover: "#E5EAEF",
    normal: "#E8EDF1",
    normalActive: "#CAD4DE",
    normalHover: "#DCE3E9",
  },
  green: {
    dark: "#2D7738",
    darkActive: "#1F5126",
    darkHover: "#276831",
    darker: "#235C2B",
    light: "#EAF5EA",
    lightActive: "#CDE4CF",
    lightHover: "#E1EFE2",
    normal: "#28A138",
    normalActive: "#1D7228",
    normalHover: "#238B31",
  },
  ink: {
    dark: "#252A31",
    darkActive: "#0B0C0F",
    darkHover: "#181B20",
    light: "#697D95",
    lightActive: "#4A617C",
    lightHover: "#5D738E",
    normal: "#4F5E71",
    normalActive: "#324256",
    normalHover: "#3E4E63",
  },
  orange: {
    dark: "#AD5700",
    darkActive: "#954A00",
    darkHover: "#A75400",
    darker: "#803F00",
    light: "#FEF2E6",
    lightActive: "#FAE2C6",
    lightHover: "#FCECDA",
    normal: "#DF7B00",
    normalActive: "#B26200",
    normalHover: "#C96F00",
  },
  product: {
    dark: "#007A69",
    darkActive: "#006657",
    darkHover: "#007060",
    darker: "#005C4E",
    light: "#E1F4F3",
    lightActive: "#BFE8E2",
    lightHover: "#D6F0EC",
    normal: "#00A58E",
    normalActive: "#008472",
    normalHover: "#009580",
  },
  red: {
    dark: "#970C0C",
    darkActive: "#6D0909",
    darkHover: "#890B0B",
    darker: "#760909",
    light: "#FAEAEA",
    lightActive: "#F3CECE",
    lightHover: "#F8E2E2",
    normal: "#D21C1C",
    normalActive: "#9D1515",
    normalHover: "#B91919",
  },
  white: {
    normal: "#FFFFFF",
    normalActive: "#E7ECF1",
    normalHover: "#F1F4F7",
  },
};

const oldFoundation = {
  palette: {
    ...palette,
    social: {
      facebook: "#3B5998",
      facebookHover: "#385490",
      facebookActive: "#354F88",
    },
  },
  base: {
    fontFamily:
      "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    fontSizeSm: "13px",
    fontSizeMd: "15px",
    fontSizeLg: "16px",
    iconSizeSm: "16px",
    iconSizeMd: "20px",
    iconSizeLg: "24px",
    borderRadius: "3px",
    sizeSm: "16px",
    sizeMd: "24px",
    sizeLg: "32px",
    sizeXl: "44px",
    size2xl: "52px",
    opacitySmall: "0.3",
    opacityMedium: "0.5",
    opacityLarge: "0.8",
    fontWeightNormal: "400",
    fontWeightMedium: "500",
    fontWeightBold: "700",
    space2xs: "4px",
    spaceXs: "8px",
    spaceSm: "12px",
    spaceMd: "16px",
    spaceLg: "24px",
    spaceXl: "32px",
    space2xl: "40px",
    space3xl: "52px",
    durationFast: "0.15s",
    durationNormal: "0.3s",
    durationSlow: "0.4s",
    transitionDefault: "ease-in-out",
    lineHeight: "1.4",
  },
};

const oldTokens = () => {
  const theme = oldFoundation;
  return {
    colorTextPrimary: theme.palette.ink.dark,
    colorTextSecondary: theme.palette.ink.normal,
    colorTextError: theme.palette.red.normal,
    colorTextInfo: theme.palette.blue.normal,
    colorTextSuccess: theme.palette.green.normal,
    colorTextWarning: theme.palette.orange.normal,
    colorTextCritical: theme.palette.red.normal,
    colorTextWhite: theme.palette.white.normal,
    colorIconPrimary: theme.palette.ink.dark,
    colorIconSecondary: theme.palette.ink.normal,
    colorIconTertiary: theme.palette.cloud.dark,
    colorIconInfo: theme.palette.blue.normal,
    colorIconSuccess: theme.palette.green.normal,
    colorIconWarning: theme.palette.orange.normal,
    colorIconCritical: theme.palette.red.normal,
    colorHeading: theme.palette.ink.dark,
    colorHeadingInverted: theme.palette.white.normal,
    colorTextLinkPrimary: theme.palette.product.dark,
    colorTextLinkPrimaryHover: theme.palette.product.normal,
    colorTextLinkSecondary: theme.palette.ink.dark,
    colorTextLinkSecondaryHover: theme.palette.product.normal,
    colorAlertIconSuccess: theme.palette.green.normal,
    colorTextAlertSuccess: theme.palette.green.dark,
    colorAlertIconInfo: theme.palette.blue.normal,
    colorTextAlertInfo: theme.palette.blue.dark,
    colorAlertIconWarning: theme.palette.orange.normal,
    colorTextAlertWarning: theme.palette.orange.dark,
    colorAlertIconCritical: theme.palette.red.normal,
    colorTextAlertCritical: theme.palette.red.dark,
    colorTextButtonFilled: theme.palette.white.normal,
    colorTextButtonFilledHover: theme.palette.white.normal,
    colorTextButtonFilledActive: theme.palette.white.normal,
    colorTextButtonPrimary: theme.palette.white.normal,
    colorTextButtonPrimaryHover: theme.palette.white.normal,
    colorTextButtonPrimaryActive: theme.palette.white.normal,
    colorTextButtonSecondary: theme.palette.ink.dark,
    colorTextButtonSecondaryHover: theme.palette.ink.darkHover,
    colorTextButtonSecondaryActive: theme.palette.ink.darkActive,
    colorTextButtonInfo: theme.palette.white.normal,
    colorTextButtonInfoHover: theme.palette.white.normal,
    colorTextButtonInfoActive: theme.palette.white.normal,
    colorTextButtonSuccess: theme.palette.white.normal,
    colorTextButtonSuccessHover: theme.palette.white.normal,
    colorTextButtonSuccessActive: theme.palette.white.normal,
    colorTextButtonWarning: theme.palette.white.normal,
    colorTextButtonWarningHover: theme.palette.white.normal,
    colorTextButtonWarningActive: theme.palette.white.normal,
    colorTextButtonCritical: theme.palette.white.normal,
    colorTextButtonCriticalHover: theme.palette.white.normal,
    colorTextButtonCriticalActive: theme.palette.white.normal,
    colorTextButtonFacebook: theme.palette.white.normal,
    colorTextButtonFacebookHover: theme.palette.white.normal,
    colorTextButtonFacebookActive: theme.palette.white.normal,
    colorTextButtonGoogle: theme.palette.ink.dark,
    colorTextButtonGoogleHover: theme.palette.ink.darkHover,
    colorTextButtonGoogleActive: theme.palette.ink.darkActive,
    colorTextButtonWhite: theme.palette.ink.dark,
    colorTextButtonWhiteHover: theme.palette.ink.darkHover,
    colorTextButtonWhiteActive: theme.palette.ink.darkActive,
    colorTextButtonPrimaryBordered: theme.palette.product.normal,
    colorTextButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    colorTextButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    colorTextButtonSecondaryBordered: theme.palette.ink.dark,
    colorTextButtonSecondaryBorderedHover: theme.palette.ink.darkHover,
    colorTextButtonSecondaryBorderedActive: theme.palette.ink.darkActive,
    colorTextButtonInfoBordered: theme.palette.blue.normal,
    colorTextButtonInfoBorderedHover: theme.palette.blue.normalHover,
    colorTextButtonInfoBorderedActive: theme.palette.blue.normalActive,
    colorTextButtonSuccessBordered: theme.palette.green.normal,
    colorTextButtonSuccessBorderedHover: theme.palette.green.normalHover,
    colorTextButtonSuccessBorderedActive: theme.palette.green.normalActive,
    colorTextButtonWarningBordered: theme.palette.orange.normal,
    colorTextButtonWarningBorderedHover: theme.palette.orange.normalHover,
    colorTextButtonWarningBorderedActive: theme.palette.orange.normalActive,
    colorTextButtonCriticalBordered: theme.palette.red.normal,
    colorTextButtonCriticalBorderedHover: theme.palette.red.normalHover,
    colorTextButtonCriticalBorderedActive: theme.palette.red.normalActive,
    colorTextButtonFacebookBordered: theme.palette.social.facebook,
    colorTextButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    colorTextButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    colorTextButtonGoogleBordered: theme.palette.ink.dark,
    colorTextButtonGoogleBorderedHover: theme.palette.ink.darkHover,
    colorTextButtonGoogleBorderedActive: theme.palette.ink.darkActive,
    colorTextButtonWhiteBordered: theme.palette.white.normal,
    colorTextButtonWhiteBorderedHover: theme.palette.white.normal,
    colorTextButtonWhiteBorderedActive: theme.palette.white.normal,
    colorTextButtonLinkPrimary: theme.palette.product.normal,
    colorTextButtonLinkPrimaryHover: theme.palette.product.darkHover,
    colorTextButtonLinkPrimaryActive: theme.palette.product.darkActive,
    colorTextButtonLinkSecondary: theme.palette.ink.dark,
    colorTextButtonLinkSecondaryHover: theme.palette.ink.darkHover,
    colorTextButtonLinkSecondaryActive: theme.palette.ink.darkActive,
    colorTextButtonLinkSecondaryCompactHover: theme.palette.product.normalHover,
    colorTextButtonLinkSecondaryCompactActive: theme.palette.product.normalActive,
    colorTextButtonLinkCritical: theme.palette.red.normal,
    colorTextButtonLinkCriticalHover: theme.palette.red.normalHover,
    colorTextButtonLinkCriticalActive: theme.palette.red.normalActive,
    colorTextButtonPrimarySubtle: theme.palette.product.dark,
    colorTextButtonPrimarySubtleHover: theme.palette.product.darkHover,
    colorTextButtonPrimarySubtleActive: theme.palette.product.darkActive,
    colorTextButtonCriticalSubtle: theme.palette.red.dark,
    colorTextButtonCriticalSubtleHover: theme.palette.red.darkHover,
    colorTextButtonCriticalSubtleActive: theme.palette.red.darkActive,
    colorTextInput: theme.palette.ink.dark,
    colorTextInputPrefix: theme.palette.ink.normal,
    colorTextInputDisabled: theme.palette.ink.normal,
    colorTextBadgeNeutral: theme.palette.ink.dark,
    colorTextBadgeInfo: theme.palette.blue.normal,
    colorTextBadgeSuccess: theme.palette.green.normal,
    colorTextBadgeWarning: theme.palette.orange.normal,
    colorTextBadgeCritical: theme.palette.red.normal,
    colorTextBadgeDark: theme.palette.white.normal,
    colorTextBadgeWhite: theme.palette.ink.dark,
    colorTextLoading: theme.palette.cloud.dark,
    colorTextTable: theme.palette.ink.normal,
    colorTextTag: theme.palette.ink.dark,
    colorTextTagSelected: theme.palette.cloud.dark,
    colorIconInput: theme.palette.cloud.dark,
    colorPlaceholderInput: theme.palette.ink.light,
    colorPlaceholderInputError: theme.palette.red.normal,
    colorPlaceholderInputFile: theme.palette.ink.light,
    colorPlaceholderInputFileError: theme.palette.red.normal,
    colorFormLabel: theme.palette.ink.dark,
    colorFormLabelFilled: theme.palette.ink.normal,
    colorInfoCheckBoxRadio: theme.palette.ink.normal,
    colorIconCheckboxRadio: theme.palette.product.normal,
    colorIconCheckboxRadioDisabled: theme.palette.cloud.dark,
    colorIconRadioButton: theme.palette.product.normal,
    colorIconRadioButtonDisabled: theme.palette.ink.normal,
    colorStopoverArrow: theme.palette.ink.normal,
    // category:Font family
    // description:
    fontFamily: theme.base.fontFamily,
    // category:Background colors
    // description:Use these tokens for background colors only. Do not use these for border colors or text theme.palette.
    backgroundBody: theme.palette.cloud.light,
    backgroundModal: theme.palette.white.normal,
    backgroundCard: theme.palette.white.normal,
    backgroundCarrierLogo: "transparent",
    backgroundCountryFlag: "transparent",
    backgroundButtonPrimary: theme.palette.product.normal,
    backgroundButtonPrimaryHover: theme.palette.product.normalHover,
    backgroundButtonPrimaryActive: theme.palette.product.normalActive,
    backgroundButtonSecondary: theme.palette.cloud.normal,
    backgroundButtonSecondaryHover: theme.palette.cloud.normalHover,
    backgroundButtonSecondaryActive: theme.palette.cloud.normalActive,
    backgroundButtonFacebook: theme.palette.social.facebook,
    backgroundButtonFacebookHover: theme.palette.social.facebookHover,
    backgroundButtonFacebookActive: theme.palette.social.facebookActive,
    backgroundButtonGoogle: theme.palette.cloud.light,
    backgroundButtonGoogleHover: theme.palette.cloud.lightHover,
    backgroundButtonGoogleActive: theme.palette.cloud.lightActive,
    backgroundButtonInfo: theme.palette.blue.normal,
    backgroundButtonInfoHover: theme.palette.blue.normalHover,
    backgroundButtonInfoActive: theme.palette.blue.normalActive,
    backgroundButtonSuccess: theme.palette.green.normal,
    backgroundButtonSuccessHover: theme.palette.green.normalHover,
    backgroundButtonSuccessActive: theme.palette.green.normalActive,
    backgroundButtonWarning: theme.palette.orange.normal,
    backgroundButtonWarningHover: theme.palette.orange.normalHover,
    backgroundButtonWarningActive: theme.palette.orange.normalActive,
    backgroundButtonCritical: theme.palette.red.normal,
    backgroundButtonCriticalHover: theme.palette.red.normalHover,
    backgroundButtonCriticalActive: theme.palette.red.normalActive,
    backgroundButtonWhite: theme.palette.white.normal,
    backgroundButtonWhiteHover: theme.palette.cloud.light,
    backgroundButtonWhiteActive: theme.palette.cloud.lightHover,
    backgroundButtonBordered: "transparent",
    backgroundButtonBorderedHover: theme.palette.cloud.light,
    backgroundButtonBorderedActive: theme.palette.cloud.light,
    backgroundButtonWhiteBordered: "transparent",
    backgroundButtonWhiteBorderedHover: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonWhiteBorderedActive: convertHexToRgba(theme.palette.white.normal, 20),
    backgroundButtonLinkPrimary: "transparent",
    backgroundButtonLinkPrimaryHover: theme.palette.product.lightHover,
    backgroundButtonLinkPrimaryActive: theme.palette.product.lightActive,
    backgroundButtonLinkSecondary: "transparent",
    backgroundButtonLinkSecondaryHover: theme.palette.cloud.lightHover,
    backgroundButtonLinkSecondaryActive: theme.palette.cloud.lightActive,
    backgroundButtonLinkCritical: "transparent",
    backgroundButtonLinkCriticalHover: theme.palette.red.lightHover,
    backgroundButtonLinkCriticalActive: theme.palette.red.lightActive,
    backgroundButtonPrimarySubtle: theme.palette.product.light,
    backgroundButtonPrimarySubtleHover: theme.palette.product.lightHover,
    backgroundButtonPrimarySubtleActive: theme.palette.product.lightActive,
    backgroundButtonPrimarySubtleFocus: theme.palette.product.light,
    backgroundButtonCriticalSubtle: theme.palette.red.light,
    backgroundButtonCriticalSubtleHover: theme.palette.red.lightHover,
    backgroundButtonCriticalSubtleActive: theme.palette.red.lightActive,
    backgroundButtonCriticalSubtleFocus: theme.palette.red.light,
    backgroundInput: theme.palette.white.normal,
    backgroundInputDisabled: theme.palette.cloud.normal,
    backgroundAlertSuccess: theme.palette.green.light,
    backgroundAlertInfo: theme.palette.blue.light,
    backgroundAlertWarning: theme.palette.orange.light,
    backgroundAlertCritical: theme.palette.red.light,
    backgroundBadgeNeutral: theme.palette.cloud.light,
    backgroundBadgeInfo: theme.palette.blue.light,
    backgroundBadgeSuccess: theme.palette.green.light,
    backgroundBadgeWarning: theme.palette.orange.light,
    backgroundBadgeCritical: theme.palette.red.light,
    backgroundBadgeDark: theme.palette.ink.dark,
    backgroundBadgeWhite: theme.palette.white.normal,
    backgroundServiceLogo: "transparent",
    backgroundSwitch: theme.palette.cloud.dark,
    backgroundSwitchChecked: theme.palette.blue.normal,
    backgroundIllustration: "transparent",
    backgroundSeparator: theme.palette.cloud.normal,
    backgroundTableShadowLeft: `linear-gradient(to left, transparent, ${convertHexToRgba(
      theme.palette.cloud.dark,
      23,
    )})`,
    backgroundTableShadowRight: `linear-gradient(to right, transparent, ${convertHexToRgba(
      theme.palette.cloud.dark,
      23,
    )})`,
    backgroundTable: theme.palette.white.normal,
    backgroundTableEven: theme.palette.cloud.light,
    backgroundTableHover: theme.palette.cloud.normal,
    backgroundTag: theme.palette.cloud.light,
    backgroundTagSelected: theme.palette.ink.dark,
    backgroundTagHover: theme.palette.cloud.lightHover,
    backgroundTagSelectedHover: theme.palette.ink.darkHover,
    backgroundTagActive: theme.palette.cloud.lightActive,
    backgroundTagSelectedActive: theme.palette.ink.darkActive,
    backgroundTooltip: theme.palette.white.normal,
    backgroundTooltipLargeMobile: theme.palette.blue.dark,
    // category:Font size
    // description:Use these sizing tokens for font sizes.
    fontSizeHeadingDisplay: "40px",
    fontSizeHeadingDisplaySubtitle: "22px",
    fontSizeHeadingTitle1: "28px",
    fontSizeHeadingTitle2: "22px",
    fontSizeHeadingTitle3: "18px",
    fontSizeHeadingTitle4: theme.base.fontSizeLg,
    fontSizeHeadingTitle5: theme.base.fontSizeMd,
    fontSizeHeadingTitle6: theme.base.fontSizeSm,
    fontSizeTextNormal: theme.base.fontSizeMd,
    fontSizeTextLarge: theme.base.fontSizeLg,
    fontSizeTextSmall: theme.base.fontSizeSm,
    fontSizeMessage: theme.base.fontSizeMd,
    fontSizeButtonLarge: theme.base.fontSizeLg,
    fontSizeButtonNormal: theme.base.fontSizeMd,
    fontSizeButtonSmall: theme.base.fontSizeSm,
    fontSizeInputNormal: theme.base.fontSizeMd,
    fontSizeInputSmall: theme.base.fontSizeMd,
    fontSizeFormLabel: theme.base.fontSizeMd,
    fontSizeFormFeedback: theme.base.fontSizeSm,
    // category:Border radius
    // description:Use radius tokens to change the border-radius size (rounded corners).
    /** use only for square */
    borderRadiusCircle: "50%",
    /** use for all basic elements like buttons, inputs, content containers */
    borderRadiusNormal: theme.base.borderRadius,
    /** use for big elements like modal and large buttons */
    borderRadiusLarge: "6px",
    /** use for smaller elements like tags */
    borderRadiusSmall: "2px",
    borderRadiusBadge: "12px",
    // category:Z Index
    // description:Use layers to show depth of page.
    zIndexDefault: "1",
    zIndexSticky: "100",
    zIndexDrawer: "815",
    zIndexModalOverlay: "800",
    zIndexModal: "825",
    zIndexOnTheTop: "900",
    // category:Size (width, height)
    // description:
    widthIconSmall: theme.base.iconSizeSm,
    heightIconSmall: theme.base.iconSizeSm,
    widthIconMedium: theme.base.iconSizeMd,
    heightIconMedium: theme.base.iconSizeMd,
    widthIconLarge: theme.base.iconSizeLg,
    heightIconLarge: theme.base.iconSizeLg,
    heightInputNormal: theme.base.sizeXl,
    heightInputLarge: theme.base.size2xl,
    heightInputSmall: theme.base.sizeLg,
    heightButtonNormal: theme.base.sizeXl,
    heightButtonLarge: theme.base.size2xl,
    heightButtonSmall: theme.base.sizeLg,
    heightCarrierLogo: theme.base.sizeLg,
    widthCarrierLogo: theme.base.sizeLg,
    heightRadioButton: "20px",
    widthRadioButton: "20px",
    heightCheckbox: "20px",
    widthCheckbox: "20px",
    heightCountryFlag: "auto",
    widthCountryFlag: theme.base.sizeMd,
    heightBadge: theme.base.sizeMd,
    widthBadgeCircled: theme.base.sizeMd,
    heightIllustrationSmall: "90px",
    heightIllustrationMedium: "200px",
    heightServiceLogoSmall: "12px",
    heightServiceLogoMedium: theme.base.sizeMd,
    heightServiceLogoLarge: "48px",
    heightSeparator: "1px",
    heightInputGroupSeparatorSmall: theme.base.sizeSm,
    heightInputGroupSeparatorNormal: theme.base.sizeMd,
    widthModalSmall: "540px",
    widthModalNormal: "740px",
    widthModalLarge: "900px",
    widthModalExtraLarge: "1280px",
    widthStopoverArrow: "36px",
    heightStopoverArrow: "7px",
    // category:Breakpoints
    widthBreakpointMediumMobile: 414,
    widthBreakpointLargeMobile: 576,
    widthBreakpointTablet: 768,
    widthBreakpointDesktop: 992,
    widthBreakpointLargeDesktop: 1200,
    // category:Border color
    // description:
    borderColorInput: theme.palette.cloud.dark,
    borderColorInputHover: theme.palette.cloud.darkHover,
    borderColorInputActive: theme.palette.ink.normalActive,
    borderColorInputFocus: theme.palette.blue.normal,
    borderColorInputError: theme.palette.red.normal,
    borderColorInputErrorHover: theme.palette.red.normalHover,
    borderColorInputErrorFocus: theme.palette.red.normal,
    borderColorTableCell: theme.palette.cloud.dark,
    borderColorCard: theme.palette.cloud.normal,
    borderColorModal: theme.palette.cloud.normal,
    borderColorButtonPrimaryBordered: theme.palette.product.normal,
    borderColorButtonPrimaryBorderedHover: theme.palette.product.normalHover,
    borderColorButtonPrimaryBorderedActive: theme.palette.product.normalActive,
    borderColorButtonSecondaryBordered: theme.palette.ink.dark,
    borderColorButtonSecondaryBorderedHover: theme.palette.ink.darkHover,
    borderColorButtonSecondaryBorderedActive: theme.palette.ink.darkActive,
    borderColorButtonFacebookBordered: theme.palette.social.facebook,
    borderColorButtonFacebookBorderedHover: theme.palette.social.facebookHover,
    borderColorButtonFacebookBorderedActive: theme.palette.social.facebookActive,
    borderColorButtonGoogleBordered: theme.palette.ink.dark,
    borderColorButtonGoogleBorderedHover: theme.palette.ink.darkHover,
    borderColorButtonGoogleBorderedActive: theme.palette.ink.darkActive,
    borderColorButtonInfoBordered: theme.palette.blue.normal,
    borderColorButtonInfoBorderedHover: theme.palette.blue.normalHover,
    borderColorButtonInfoBorderedActive: theme.palette.blue.normalActive,
    borderColorButtonSuccessBordered: theme.palette.green.normal,
    borderColorButtonSuccessBorderedHover: theme.palette.green.normalHover,
    borderColorButtonSuccessBorderedActive: theme.palette.green.normalActive,
    borderColorButtonWarningBordered: theme.palette.orange.normal,
    borderColorButtonWarningBorderedHover: theme.palette.orange.normalHover,
    borderColorButtonWarningBorderedActive: theme.palette.orange.normalActive,
    borderColorButtonCriticalBordered: theme.palette.red.normal,
    borderColorButtonCriticalBorderedHover: theme.palette.red.normalHover,
    borderColorButtonCriticalBorderedActive: theme.palette.red.normalActive,
    borderColorButtonWhiteBordered: theme.palette.white.normal,
    borderColorButtonWhiteBorderedHover: theme.palette.white.normal,
    borderColorButtonWhiteBorderedActive: theme.palette.white.normal,
    borderColorCheckboxRadio: theme.palette.cloud.dark,
    borderColorCheckboxRadioError: theme.palette.red.normal,
    borderColorCheckboxRadioHover: theme.palette.ink.normal,
    borderColorCheckboxRadioActive: theme.palette.ink.dark,
    borderColorCheckboxRadioFocus: theme.palette.blue.normal,
    borderColorTable: theme.palette.cloud.normal,
    borderColorTableHead: theme.palette.cloud.dark,
    borderColorTag: theme.palette.cloud.dark,
    borderColorTagFocus: theme.palette.blue.normal,
    // category:Border style
    // description:
    borderStyleCard: "solid",
    borderWidthCard: "1px",
    borderStyleInput: "solid",
    borderWidthInput: "1px",
    borderWidthInputFocus: "2px",
    // category:Opacity
    // description:
    opacityOverlay: theme.base.opacityLarge,
    opacityButtonDisabled: theme.base.opacitySmall,
    opacityRadioButtonDisabled: theme.base.opacityMedium,
    opacityCheckboxDisabled: theme.base.opacityMedium,
    // category:Font weight
    // description:Use this for setting basic font weights.
    fontWeightNormal: theme.base.fontWeightNormal,
    fontWeightMedium: theme.base.fontWeightMedium,
    fontWeightBold: theme.base.fontWeightBold,
    fontWeightLinks: theme.base.fontWeightMedium,
    fontWeightHeadingDisplay: theme.base.fontWeightBold,
    fontWeightHeadingDisplaySubtitle: theme.base.fontWeightNormal,
    fontWeightHeadingTitle1: theme.base.fontWeightBold,
    fontWeightHeadingTitle2: theme.base.fontWeightMedium,
    fontWeightHeadingTitle3: theme.base.fontWeightMedium,
    fontWeightHeadingTitle4: theme.base.fontWeightMedium,
    fontWeightHeadingTitle5: theme.base.fontWeightBold,
    fontWeightHeadingTitle6: theme.base.fontWeightBold,
    fontWeightTableHead: theme.base.fontWeightBold,
    // category:Spacing
    // description:Use this for setting spacings for elements.
    paddingAlert: theme.base.spaceMd,
    paddingAlertWithIcon: theme.base.spaceSm,
    paddingBadge: `0 ${theme.base.spaceXs}`,
    paddingButtonWithoutText: "0",
    paddingButtonSmall: `0 ${theme.base.spaceSm}`,
    paddingButtonNormal: `0 ${theme.base.spaceMd}`,
    paddingButtonLarge: "0 28px",
    paddingButtonSmallWithIcons: `0 ${theme.base.spaceXs}`,
    paddingButtonNormalWithIcons: `0 ${theme.base.spaceSm}`,
    paddingButtonLargeWithIcons: `0 ${theme.base.spaceMd}`,
    paddingButtonSmallWithLeftIcon: `0 ${theme.base.spaceSm} 0 ${theme.base.spaceXs}`,
    paddingButtonNormalWithLeftIcon: `0 ${theme.base.spaceMd} 0 ${theme.base.spaceSm}`,
    paddingButtonLargeWithLeftIcon: `0 28px 0 ${theme.base.spaceMd}`,
    paddingButtonSmallWithRightIcon: `0 ${theme.base.spaceXs} 0 ${theme.base.spaceSm}`,
    paddingButtonNormalWithRightIcon: `0 ${theme.base.spaceSm} 0 ${theme.base.spaceMd}`,
    paddingButtonLargeWithRightIcon: `0 ${theme.base.spaceMd} 0 28px`,
    paddingTextareaSmall: `${theme.base.spaceXs} ${theme.base.spaceSm}`,
    paddingTextareaNormal: theme.base.spaceSm,
    paddingInputSmall: `0 ${theme.base.spaceSm}`,
    paddingInputNormal: `0 ${theme.base.spaceSm}`,
    marginButtonIcon: theme.base.spaceXs,
    marginButtonGroup: "0 1px 0 0",
    marginTopFormFeedback: "2px",
    marginBottomSelectSuffix: "2px",
    paddingInputFile: "0 0 0 6px",
    paddingLeftSelectPrefix: "48px",
    paddingLoading: theme.base.spaceSm,
    paddingTable: `${theme.base.spaceSm} ${theme.base.spaceMd}`,
    paddingTableCompact: `${theme.base.spaceXs} ${theme.base.spaceSm}`,
    paddingTag: `${theme.base.spaceXs}`,
    paddingTagWithIcon: `6px ${theme.base.spaceXs} 6px 6px`,
    paddingTagRemovable: `6px 6px 6px ${theme.base.spaceXs}`,
    paddingTagRemovableWithIcon: "6px",
    marginBadgeIcon: `0 ${theme.base.space2xs} 0 0`,
    spaceXXXSmall: "2px",
    spaceXXSmall: theme.base.space2xs,
    spaceXSmall: theme.base.spaceXs,
    spaceSmall: theme.base.spaceSm,
    spaceMedium: theme.base.spaceMd,
    spaceLarge: theme.base.spaceLg,
    spaceXLarge: theme.base.spaceXl,
    spaceXXLarge: theme.base.space2xl,
    spaceXXXLarge: theme.base.space3xl,
    // category:Duration
    // description:Use this for setting the speed of animation or transition.
    durationFast: theme.base.durationFast,
    durationNormal: theme.base.durationNormal,
    durationSlow: theme.base.durationSlow,
    // category:Modifier
    // description:Use this for values for transform property, etc.
    modifierScaleButtonActive: 0.95,
    modifierScaleCheckboxRadioActive: 0.95,
    // category:Line height
    // description:
    lineHeightText: theme.base.lineHeight,
    lineHeightTextSmall: "16px",
    lineHeightTextNormal: "20px",
    lineHeightTextLarge: "24px",
    lineHeightHeading: "1.2",
    lineHeightHeadingDisplay: "44px",
    lineHeightHeadingDisplaySubtitle: "28px",
    lineHeightHeadingTitle1: "32px",
    lineHeightHeadingTitle2: "28px",
    lineHeightHeadingTitle3: "24px",
    lineHeightHeadingTitle4: "20px",
    lineHeightHeadingTitle5: "20px",
    lineHeightHeadingTitle6: "16px",
    // category:Text decoration
    // description:
    textDecorationTextLinkPrimary: "underline",
    textDecorationTextLinkPrimaryHover: "none",
    textDecorationTextLinkSecondary: "underline",
    textDecorationTextLinkSecondaryHover: "none",
    // category:Box shadow
    // description:
    boxShadowButtonFocus: `0 0 4px 1px ${convertHexToRgba(theme.palette.blue.normal, 30)}`,
    boxShadowAction: `0px 0px 2px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px 1px 4px 0px ${convertHexToRgba(theme.palette.ink.dark, 12)}`,
    boxShadowActionActive: `0px 1px 4px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px 4px 8px 0px ${convertHexToRgba(theme.palette.ink.dark, 12)}`,
    boxShadowFixed: `0px 0px 2px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px 2px 4px 0px ${convertHexToRgba(theme.palette.ink.dark, 12)}`,
    boxShadowFixedReverse: `0px 0px 2px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px -2px 4px 0px ${convertHexToRgba(theme.palette.ink.dark, 12)}`,
    boxShadowRaised: `0px 4px 8px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px 8px 24px 0px ${convertHexToRgba(theme.palette.ink.dark, 24)}`,
    boxShadowRaisedReverse: `0px -4px 8px 0px ${convertHexToRgba(
      theme.palette.ink.dark,
      16,
    )}, 0px -8px 24px 0px ${convertHexToRgba(theme.palette.ink.dark, 24)}`,
    boxShadowOverlay: `0px 12px 24px -4px ${convertHexToRgba(
      theme.palette.ink.dark,
      24,
    )}, 0px 8px 60px 0px ${convertHexToRgba(theme.palette.ink.dark, 32)}`,
    // category:Color palette
    // description: Use these tokens as a fallback when you need specific color. It's always preferred to use less abstract design tokens. Don't use Hover and Active shades as base theme.palette.
    paletteProductLight: theme.palette.product.light,
    paletteProductLightHover: theme.palette.product.lightHover,
    paletteProductLightActive: theme.palette.product.lightActive,
    paletteProductNormal: theme.palette.product.normal,
    paletteProductNormalHover: theme.palette.product.normalHover,
    paletteProductNormalActive: theme.palette.product.normalActive,
    paletteProductDark: theme.palette.product.dark,
    paletteProductDarkHover: theme.palette.product.darkHover,
    paletteProductDarkActive: theme.palette.product.darkActive,
    paletteProductDarker: theme.palette.product.darker,
    paletteWhite: theme.palette.white.normal,
    paletteWhiteHover: theme.palette.cloud.light,
    paletteWhiteActive: theme.palette.cloud.lightHover,
    paletteCloudLight: theme.palette.cloud.light,
    paletteCloudLightHover: theme.palette.cloud.lightHover,
    paletteCloudLightActive: theme.palette.cloud.lightActive,
    paletteCloudNormal: theme.palette.cloud.normal,
    paletteCloudNormalHover: theme.palette.cloud.normalHover,
    paletteCloudNormalActive: theme.palette.cloud.normalActive,
    paletteCloudDark: theme.palette.cloud.dark,
    paletteCloudDarkHover: theme.palette.cloud.darkHover,
    paletteCloudDarkActive: theme.palette.cloud.darkActive,
    paletteInkLight: theme.palette.ink.light,
    paletteInkLightHover: theme.palette.ink.lightHover,
    paletteInkLightActive: theme.palette.ink.lightActive,
    paletteInkDark: theme.palette.ink.dark,
    paletteInkDarkHover: theme.palette.ink.darkHover,
    paletteInkDarkActive: theme.palette.ink.darkActive,
    paletteInkNormal: theme.palette.ink.normal,
    paletteInkNormalHover: theme.palette.ink.normalHover,
    paletteInkNormalActive: theme.palette.ink.normalActive,
    paletteOrangeLight: theme.palette.orange.light,
    paletteOrangeLightHover: theme.palette.orange.lightHover,
    paletteOrangeLightActive: theme.palette.orange.lightActive,
    paletteOrangeNormal: theme.palette.orange.normal,
    paletteOrangeNormalHover: theme.palette.orange.normalHover,
    paletteOrangeNormalActive: theme.palette.orange.normalActive,
    paletteOrangeDark: theme.palette.orange.dark,
    paletteOrangeDarkHover: theme.palette.orange.darkHover,
    paletteOrangeDarkActive: theme.palette.orange.darkActive,
    paletteOrangeDarker: theme.palette.orange.darker,
    paletteRedLight: theme.palette.red.light,
    paletteRedLightHover: theme.palette.red.lightHover,
    paletteRedLightActive: theme.palette.red.lightActive,
    paletteRedNormal: theme.palette.red.normal,
    paletteRedNormalHover: theme.palette.red.normalHover,
    paletteRedNormalActive: theme.palette.red.normalActive,
    paletteRedDark: theme.palette.red.dark,
    paletteRedDarkHover: theme.palette.red.darkHover,
    paletteRedDarkActive: theme.palette.red.darkActive,
    paletteRedDarker: theme.palette.red.darker,
    paletteGreenLight: theme.palette.green.light,
    paletteGreenLightHover: theme.palette.green.lightHover,
    paletteGreenLightActive: theme.palette.green.lightActive,
    paletteGreenNormal: theme.palette.green.normal,
    paletteGreenNormalHover: theme.palette.green.normalHover,
    paletteGreenNormalActive: theme.palette.green.normalActive,
    paletteGreenDark: theme.palette.green.dark,
    paletteGreenDarkHover: theme.palette.green.darkHover,
    paletteGreenDarkActive: theme.palette.green.darkActive,
    paletteGreenDarker: theme.palette.green.darker,
    paletteBlueLight: theme.palette.blue.light,
    paletteBlueLightHover: theme.palette.blue.lightHover,
    paletteBlueLightActive: theme.palette.blue.lightActive,
    paletteBlueNormal: theme.palette.blue.normal,
    paletteBlueNormalHover: theme.palette.blue.normalHover,
    paletteBlueNormalActive: theme.palette.blue.normalActive,
    paletteBlueDark: theme.palette.blue.dark,
    paletteBlueDarkHover: theme.palette.blue.darkHover,
    paletteBlueDarkActive: theme.palette.blue.darkActive,
    paletteBlueDarker: theme.palette.blue.darker,
    paletteSocialFacebook: theme.palette.social.facebook,
    paletteSocialFacebookHover: theme.palette.social.facebookHover,
    paletteSocialFacebookActive: theme.palette.social.facebookActive,
  };
};

describe("All deprecated tokens", () => {
  const oldTokensObject = oldTokens();
  const newTokensObject = createTheme();
  it.each(Object.keys(oldTokensObject))("%s should exist in the return of createTheme", key => {
    expect(newTokensObject).toHaveProperty(key);
  });
});
