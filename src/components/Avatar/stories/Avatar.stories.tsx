import React from 'react';
import { Meta } from '@storybook/react';
import Avatar from '../Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatarPng from '/assets/man-avatar.png';
import avatarPng24 from '/assets/man-avatar-24.png';
import avatarPng32 from '/assets/man-avatar-32.png';
import avatarPng64 from '/assets/man-avatar-64.png';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

export const Image = () => {
  return (
    <Avatar>
      <img src={avatarPng} />
    </Avatar>
  );
};

export const Icon = () => {
  return (
    <Avatar>
      <FontAwesomeIcon icon="user" />
    </Avatar>
  );
};

export const Text = () => {
  return <Avatar>AJ</Avatar>;
};

export const Sizes = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-5 items-center">
        <div>small</div>
        <Avatar size="sm">
          <img src={avatarPng} />
        </Avatar>
      </div>
      <div className="flex gap-5 items-center">
        <div>medium</div>
        <Avatar size="md">
          <img src={avatarPng24} />
        </Avatar>
      </div>
      <div className="flex gap-5 items-center">
        <div>large</div>
        <Avatar size="lg">
          <img src={avatarPng32} />
        </Avatar>
      </div>
      <div className="flex gap-5 items-center">
        <div>x large</div>
        <Avatar size="xl">
          <img src={avatarPng64} />
        </Avatar>
      </div>
    </div>
  );
};

export const Shape = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <div>Circle</div>
        <Avatar>
          <FontAwesomeIcon icon="user" />
        </Avatar>
        <Avatar>
          <img src={avatarPng24} />
        </Avatar>
        <Avatar>AJ</Avatar>
      </div>
      <div className="flex gap-5 items-center">
        <div>Square</div>
        <Avatar shape="square">
          <FontAwesomeIcon icon="user" />
        </Avatar>
        <Avatar shape="square">
          <img src={avatarPng24} />
        </Avatar>
        <Avatar shape="square">AJ</Avatar>
      </div>
    </div>
  );
};

export const Emphasis = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-13 gap-4">
      <div className="col-span-1">
        <div className="row-span-1">Grey</div>
      </div>
      <div className="col-span-1">
        <Avatar>
          <FontAwesomeIcon icon="user" />
        </Avatar>
      </div>
      <div className="col-span-1">
        <Avatar emphasis="subtle">
          <FontAwesomeIcon icon="user" />
        </Avatar>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Red</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="red">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="red" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Orange</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="orange">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="orange" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Yellow</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="yellow">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="yellow" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Lime</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="lime">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="lime" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Green</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="green">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="green" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Teal</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="teal">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="teal" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Turquoise</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="turquoise">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="turquoise" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Aqua</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="aqua">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="aqua" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Blue</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="blue">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="blue" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Ultramarine</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="ultramarine">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="ultramarine" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Purple</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="purple">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="purple" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Pink</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="pink">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar color="pink" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export const Status = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-5">
      <div className="col-span-1">
        <div className="row-span-1">None</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar>
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Warning</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="warning">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="warning" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Error</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="error">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="error" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Success</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="success">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="success" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">Information</div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="info">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
      <div className="col-span-1">
        <div className="row-span-1">
          <Avatar status="info" emphasis="subtle">
            <FontAwesomeIcon icon="user" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};
