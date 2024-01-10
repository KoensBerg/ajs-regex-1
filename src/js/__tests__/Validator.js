import Validator from '../Validator';

test.each([
  ['Nika_99-k', true],
  ['Nika_99-', false],
  ['Nika_99_', false],
  ['Nika_99', false],
  ['-Nika', false],
  ['_Nika', false],
  ['99-Nika', false],
  ['Nika_9999-Nika', false],
  ['Nika-@#$', false],
  ['Nika Nika', false],
  ['Ника', false],
])(
  'should get true or false',
  (Data, expected) => {
    const received = Validator.validateUsername(Data);

    expect(received).toBe(expected);
  },
);
