import Validator from '../Validator';

test.each([
  ['Nika_379-k', true],
  ['n-', false],
  ['n_', false],
  ['n3', false],
  ['-n', false],
  ['_n', false],
  ['3n', false],
  ['N9999n', false],
  ['N@#$n', false],
  ['Nika Nika', false],
  ['Ника', false],
])(
  'should get true or false',
  (Data, expected) => {
    const received = Validator.validateUsername(Data);

    expect(received).toBe(expected);
  },
);
