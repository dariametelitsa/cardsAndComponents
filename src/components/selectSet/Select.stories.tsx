import type { Meta } from '@storybook/react';
import { accordionSet, Select } from "./Select";
import React, { useMemo, useState } from "react";


const meta: Meta<typeof Select> = {
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;

export const DefaultSelect = () => {
    const [value, setValue] = useState<string>(accordionSet[0].title);
    return <Select items={accordionSet} value={value} onChange={setValue}/>
}

export const EmptySelect = () => {
    const [value, setValue] = useState<string>('');
    return <Select items={accordionSet} value={value} onChange={setValue}/>
}