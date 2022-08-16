import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { HANDLERS } from '../../.mocks/handlers'

import { SamplePage } from './SamplePage'

const meta: ComponentMeta<typeof SamplePage> = {
  title: 'Components/pages/SamplePage',
  component: SamplePage,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const FetchPetsCountZero: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[fetchPets] success: 0件',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('0件'),
        HANDLERS.addPet.success('正常')
      ],
    },
  },
  args: {},
}

export const FetchPetsCountMultiple: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[fetchPets] success: 複数件',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('複数件'),
        HANDLERS.addPet.success('正常')
      ],
    },
  },
  args: {},
}

export const AddPetSuccess: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[addPet] success',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('複数件'),
        HANDLERS.addPet.success('正常')
      ],
    },
  },
  args: {},
}

export const AddPetInvalidUnknownFields: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[addPet] invalid: フィールドが特定できないエラー',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('複数件'),
        HANDLERS.addPet.invalid('フィールドが特定できないエラー')
      ],
    },
  },
  args: {},
}

export const AddPetInvalidSingleField: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[addPet] invalid: 単数フィールドエラー',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('複数件'),
        HANDLERS.addPet.invalid('単数フィールドエラー')
      ],
    },
  },
  args: {},
}

export const AddPetInvalidMultipleFields: ComponentStoryObj<typeof SamplePage> = {
  storyName: '[addPet] invalid: 複数フィールドエラー',
  parameters: {
    msw: {
      handlers: [
        HANDLERS.fetchPets.success('複数件'),
        HANDLERS.addPet.invalid('複数フィールドエラー')
      ],
    },
  },
  args: {},
}
