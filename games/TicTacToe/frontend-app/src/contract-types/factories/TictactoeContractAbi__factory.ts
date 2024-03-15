/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.76.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import { Interface, Contract, ContractFactory } from 'fuels';
import type {
  Provider,
  Account,
  AbstractAddress,
  BytesLike,
  DeployContractOptions,
  StorageSlot,
} from 'fuels';
import type {
  TictactoeContractAbi,
  TictactoeContractAbiInterface,
} from '../TictactoeContractAbi';

const _abi = {
  types: [
    {
      typeId: 0,
      type: '()',
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: '(_, _)',
      components: [
        {
          name: '__tuple_element',
          type: 4,
          typeArguments: null,
        },
        {
          name: '__tuple_element',
          type: 4,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 2,
      type: 'b256',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 3,
      type: 'enum GameStateError',
      components: [
        {
          name: 'GameHasEnded',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'GameHasNotEnded',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: 'enum Identity',
      components: [
        {
          name: 'Address',
          type: 11,
          typeArguments: null,
        },
        {
          name: 'ContractId',
          type: 12,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: 'enum Option',
      components: [
        {
          name: 'None',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'Some',
          type: 9,
          typeArguments: null,
        },
      ],
      typeParameters: [9],
    },
    {
      typeId: 6,
      type: 'enum PlayerError',
      components: [
        {
          name: 'IncorrectPlayerTurn',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: 'enum PositionError',
      components: [
        {
          name: 'CellIsNotEmpty',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InvalidPosition',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: 'enum State',
      components: [
        {
          name: 'Playing',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'Ended',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: 'generic T',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 10,
      type: 'raw untyped ptr',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 11,
      type: 'struct Address',
      components: [
        {
          name: 'value',
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 12,
      type: 'struct ContractId',
      components: [
        {
          name: 'value',
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 13,
      type: 'struct GameDrawnEvent',
      components: [
        {
          name: 'player_one',
          type: 4,
          typeArguments: null,
        },
        {
          name: 'player_two',
          type: 4,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 14,
      type: 'struct GameWonEvent',
      components: [
        {
          name: 'player',
          type: 4,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 15,
      type: 'struct NewGameEvent',
      components: [
        {
          name: 'player_one',
          type: 4,
          typeArguments: null,
        },
        {
          name: 'player_two',
          type: 4,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 16,
      type: 'struct RawVec',
      components: [
        {
          name: 'ptr',
          type: 10,
          typeArguments: null,
        },
        {
          name: 'cap',
          type: 18,
          typeArguments: null,
        },
      ],
      typeParameters: [9],
    },
    {
      typeId: 17,
      type: 'struct Vec',
      components: [
        {
          name: 'buf',
          type: 16,
          typeArguments: [
            {
              name: '',
              type: 9,
              typeArguments: null,
            },
          ],
        },
        {
          name: 'len',
          type: 18,
          typeArguments: null,
        },
      ],
      typeParameters: [9],
    },
    {
      typeId: 18,
      type: 'u64',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: 'get_board',
      output: {
        name: '',
        type: 17,
        typeArguments: [
          {
            name: '',
            type: 5,
            typeArguments: [
              {
                name: '',
                type: 4,
                typeArguments: null,
              },
            ],
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [],
      name: 'get_current_player',
      output: {
        name: '',
        type: 5,
        typeArguments: [
          {
            name: '',
            type: 4,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [],
      name: 'get_game_state',
      output: {
        name: '',
        type: 8,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [],
      name: 'get_players',
      output: {
        name: '',
        type: 5,
        typeArguments: [
          {
            name: '',
            type: 1,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'position',
          type: 18,
          typeArguments: null,
        },
      ],
      name: 'make_move',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'player_one',
          type: 4,
          typeArguments: null,
        },
        {
          name: 'player_two',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'new_game',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: '',
        type: 6,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: '',
        type: 7,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: '',
        type: 7,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: '',
        type: 14,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: '',
        type: 13,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 7,
      loggedType: {
        name: '',
        type: 15,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
  configurables: [],
};

const _storageSlots: StorageSlot[] = [
  {
    key: '02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbae',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: '02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbaf',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: '6294951dcb0a9111a517be5cf4785670ff4e166fb5ab9c33b17e6881b48e964f',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: '6294951dcb0a9111a517be5cf4785670ff4e166fb5ab9c33b17e6881b48e9650',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: '94b2b70d20da552763c7614981b2a4d984380d7ed4e54c01b28c914e79e44bd5',
    value: '0000000000000001000000000000000000000000000000000000000000000000',
  },
  {
    key: 'b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee0',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: 'b48b753af346966d0d169c0b2e3234611f65d5cfdb57c7b6e7cd6ca93707bee1',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: 'de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0',
    value: '0000000000000000000000000000000000000000000000000000000000000000',
  },
];

export class TictactoeContractAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): TictactoeContractAbiInterface {
    return new Interface(_abi) as unknown as TictactoeContractAbiInterface;
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): TictactoeContractAbi {
    return new Contract(
      id,
      _abi,
      accountOrProvider
    ) as unknown as TictactoeContractAbi;
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<TictactoeContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = TictactoeContractAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as TictactoeContractAbi;
  }
}
