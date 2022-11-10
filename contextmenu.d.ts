import React = require("react");
import { Cancel } from ".";

export interface ContextMenu extends ContextMenuComponents {
    /**
     * Allows you to patch a given context menu.
     * Acts as a wrapper around the `Patcher`.
     */
    patch(navId: string, callback: ContextMenuCallback): Cancel;

    /* Allows you to remove the patch added to a given context menu. */
    unpatch(navId: string, callback: ContextMenuCallback): Cancel;

    /**
     * Builds a single menu item.
     *
     * The only prop shown here is the type, the rest should match the actual component being built.
     * View those to see what options exist for each, they often have less in common than you might think.
     */
    buildItem(props: MenuItemProps): React.ReactElement;

    /**
     * Creates the all the items **and groups** of a context menu recursively.
     *
     * There is no hard limit to the number of groups within groups or number of items in a menu.
     */
    buildMenuChildren(setup: MenuItemProps[]): React.ReactElement;

    /**
     * Creates the menu *component* including the wrapping `ContextMenu`.
     * Calls {@link ContextMenu.buildMenuChildren} under the covers.
     */
    buildMenu(setup: MenuItemProps[]): React.FunctionComponent<any>;

    /** Function that allows you to open an entire context menu. */
    open(
        event: React.MouseEvent,
        menuComponent: React.ComponentType<any>,
        config?: ContextMenuConfig,
    ): void;

    /** Closes the current opened context menu immediately. */
    close(): void;
}

export type ContextMenuCallback = (
    tree: React.ReactElement,
    props: any,
) => React.ReactElement | void;

interface BaseMenuItemProps {
    type?: string;

    /**
     * ID of the item, unique to this menu.
     *
     * Computed from the label if not provided.
     * If there is more than one item with the same label, issues with hover effects can occur.
     */
    id?: string;

    /** Item text */
    label?: string;

    /** Hint to show on the right hand side */
    hint?: string;

    /** Description to show underneath */
    subtext?: string;

    /** URL of an image to show on the side */
    image?: React.ReactNode;

    /** Component to render on the side */
    icon?: React.ReactNode;

    /** Show as danger (red) */
    danger?: boolean;

    /** Mark disabled (not clickable) */
    disabled?: boolean;

    /** Function to run on click */
    onClick?: (event: React.MouseEvent) => void;

    /** Alias for onClick */
    action?: (event: React.MouseEvent) => void;

    /** Function to run when the menu closes */
    onClose?: () => void;

    /** Prevent closing on click */
    closeOnClick?: boolean;

    /** Custom style */
    style?: React.CSSProperties;

    /** Custom render function */
    render?: React.FunctionComponent<{
        color: string;
        disabled: boolean;
        isFocused: boolean;
    }>;
}

/** Separator item. */
interface SeparatorItemProps {
    type: "separator";
}

/** Basic text item. */
interface TextItemProps extends BaseMenuItemProps {
    type: "text";
}

/**
 * Custom control item.
 *
 * Used to render custom controls like sliders, etc.
 */
interface ControlItemProps extends BaseMenuItemProps {
    type: "control";

    /** Function that renders the control */
    control: React.FunctionComponent<ControlItemProps>;
}

/** Base type for items with a checked state */
interface CheckedItemProps extends BaseMenuItemProps {
    /** Is the item checked (selected/toggled) */
    checked?: boolean;
}

/** Checkbox/toggle item */
interface CheckboxItemProps extends CheckedItemProps {
    type: "toggle";
}

/**
 * Radio button item.
 *
 * Note: without the {@linkcode forceUpdate} option enabled, you will need to manually
 * manage the component's state. If you do not, the toggle will appear to not update.
 *
 * @see {@link https://reactjs.org/docs/hooks-reference.html#usestate}
 */
interface RadioItemProps extends CheckedItemProps {
    type: "radio";

    /** Should the component force-update when selected */
    forceUpdate?: boolean;
}

/** Submenu with items */
interface GroupItemProps {
    type: "submenu";

    /** Child menu items to render */
    items?: MenuItemProps[];

    /** Alias for {@linkcode items} */
    render?: MenuItemProps[];

    /**
     * React component(s) to render
     *
     * Overrides the {@linkcode items} and {@linkcode render} configs
     */
    children?: React.ReactNode;
}

export type MenuItemProps =
    | TextItemProps
    | ControlItemProps
    | CheckboxItemProps
    | RadioItemProps
    | GroupItemProps
    | SeparatorItemProps;

export interface ContextMenuConfig {
    position?: "right" | "left";
    align?: "top" | "bottom";
    onClose?: (...args: any) => void;
    noBlurEvent?: boolean;
}

export interface ContextMenuComponents {
    Menu: React.ComponentType<any>;
    Group: React.ComponentType<GroupItemProps>;
    Item: React.ComponentType<TextItemProps>;
    Separator: React.ComponentType<SeparatorItemProps>;
    CheckboxItem: React.ComponentType<CheckboxItemProps>;
    ControlItem: React.ComponentType<ControlItemProps>;
    RadioItem: React.ComponentType<RadioItemProps>;
}
