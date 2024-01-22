from abc import ABC, abstractmethod


class BaseSolver(ABC):

    def __init__(self, board):
        # Constructor: Initializes the BaseSolver object with a Sudoku board
        self.board = board

    @abstractmethod
    def solve(self):
        # Abstract method to be implemented by concrete solvers
        # The implementation of this method should solve the Sudoku puzzle
        ...

    def print_board(self):
        # Print the Sudoku board in a visually appealing format

        # Separator line to visually separate the blocks of the Sudoku board
        row_sep = '-' * 25

        for i in range(9):
            # Insert a horizontal separator line after every 3 rows
            if i % 3 == 0:
                print(row_sep)

            # Convert each element in the row to a string for printing
            row = [str(x) for x in self.board[i]]

            # Print each row with vertical separators to create the Sudoku grid
            print('| ' + ' '.join(row[0:3]) + ' | ' +
                  ' '.join(row[3:6]) + ' | ' + ' '.join(row[6:]) + ' |')

        # Print a final horizontal separator line at the end
        print(row_sep)
