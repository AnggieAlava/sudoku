from abc import ABC, abstractmethod


class BaseSolver(ABC):

    def __init__(self, board):
        self.board = board

    @abstractmethod
    def solve(self):
        ...

    def print_board(self):
        row_sep = '-'*25

        for i in range(9):
            if i % 3 == 0:
                print(row_sep)

            row = [str(x) for x in self.board[i]]
            print('| '+' '.join(row[0:3])+' | ' +
                  ' '.join(row[3:6])+' | '+' '.join(row[6:])+' |')

        print(row_sep)