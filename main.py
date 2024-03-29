from sudoku import BacktrackingSolver
grid = [
    [1, 0, 0, 7, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 1],
    [4, 0, 0, 5, 0, 0, 0, 2, 0],
    [0, 0, 1, 0, 0, 0, 4, 3, 0],
    [2, 0, 4, 1, 0, 0, 0, 7, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 8],
    [0, 0, 5, 0, 0, 0, 0, 0, 3],
    [0, 2, 0, 9, 6, 5, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 6, 0]
]

if __name__ == "__main__":
    print("Sudoku")
    solver = BacktrackingSolver(grid)
    solver.print_board()
    solver.solve()
    solver.print_board()
