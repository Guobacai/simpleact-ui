import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default {
  title: 'Components/Input',
  componentl: Input,
} as Meta;

export const InputVariationStory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>Basic</div>
      <div className="bg-neutral-100 w-72 flex flex-col gap-2 p-5">
        <Input placeholder="Enter Price" />
      </div>
      <div>Leading Content</div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input placeholder="Enter Price" leadingContent="USD $" />
      </div>
    </div>
  );
};

InputVariationStory.storyName = 'Variation';

export const InputStory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>No Label</div>
      <div className="w-72 bg-neutral-100 p-5">
        <Input placeholder="Enter Price" />
      </div>
      <div>Top Label</div>
      <div className="bg-neutral-100 w-72 flex flex-col gap-2 p-5">
        <Input
          label="Email Adddress"
          placeholder="Enter Price"
          orientation="vertical"
        />
      </div>
      <div>Inline Label</div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input label="Email Address" placeholder="Enter Price" />
      </div>
    </div>
  );
};

InputStory.storyName = 'Orientation';

export const InputStatesStory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>Enabled</div>
      <div className="w-80 bg-neutral-100 p-5">
        <Input label="Label" placeholder="Enter Price" />
      </div>
      <div>Hover</div>
      <div className="bg-neutral-100 w-80 flex flex-col gap-2 p-5">
        <Input label="Label" placeholder="Enter Price" orientation="vertical" />
      </div>
      <div>Focus</div>
      <div className="w-96 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input label="Email Address" placeholder="Enter Price" />
      </div>
      <div>Filled</div>
      <div className="w-96 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input label="Email Address" placeholder="Enter Price" value="1500" />
      </div>
      <div>Disabled</div>
      <div className="w-96 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input label="Email Address" placeholder="Enter Price" disabled />
      </div>
      <div>Readonly</div>
      <div className="w-96 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input
          label="Email Address"
          placeholder="Enter Price"
          value="Input Value"
          readonly
        />
      </div>
    </div>
  );
};

InputStatesStory.storyName = 'States';

export const InputStatusStory = () => {
  return (
    <>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input label="None" orientation="vertical" />
      </div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input
          label="Success"
          orientation="vertical"
          status="success"
          supportiveText="Supportive Text"
        />
      </div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input
          label="Warning"
          orientation="vertical"
          status="warning"
          supportiveText="Supportive Text"
        />
      </div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input
          label="Error"
          orientation="vertical"
          status="error"
          supportiveText="Supportive Text"
        />
      </div>
      <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
        <Input
          label="Loading"
          orientation="vertical"
          status="loading"
          supportiveText="Supportive Text"
        />
      </div>
    </>
  );
};

InputStatusStory.storyName = 'Status';

export const InputIconStory = () => {
  return (
    <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
      <Input
        placeholder="leading icon"
        iconPosition="leading"
        icon={faCircleUser}
      ></Input>
      <Input
        placeholder="trailing icon"
        iconPosition="tailing"
        icon={faCircleUser}
      ></Input>
    </div>
  );
};

InputIconStory.storyName = 'Icon';

export const InputClearableStory = () => {
  const [value, setValue] = useState('');

  const handleClickClearBtn = () => {
    setValue('');
  };

  const onInputChanged = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
      <Input
        clearable
        onChange={onInputChanged}
        handleClickClearBtn={handleClickClearBtn}
        value={value}
        icon={faCircleUser}
        iconPosition="tailing"
      ></Input>
    </div>
  );
};

InputClearableStory.storyName = 'Clearable';

export const InputPasswordStory = () => {
  const [value, setValue] = useState('');

  const onInputChanged = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-80 bg-neutral-100 flex flex-col gap-2 p-5">
      <InputPassword onChange={onInputChanged} value={value}></InputPassword>
      <div>The actual password: {value}</div>
    </div>
  );
};

InputPasswordStory.storyName = 'Password';
