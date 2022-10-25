import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Heading";

export default {
    title: 'Component/Button',
    component: Button,
    args: {
        children: 'Create account',
        size: 'md',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps>= {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
