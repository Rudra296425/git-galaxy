import random
import time

board = [[' ' for _ in range(3)] for _ in range(3)]

def print_board(board):
    for row in board:
        print('|'.join(row))
        print('-' * 5)

def get_empty_cells(board):
    empty = []
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                empty.append((i,j))
    return empty

players = ['X', 'O']
turn = 0

while True:
    empty_cells = get_empty_cells(board)
    if not empty_cells:
        print("Game Over! Board is full.")
        break
    move = random.choice(empty_cells)
    board[move[0]][move[1]] = players[turn]
    print(f"Player {players[turn]} moves to {move}")
    print_board(board)
    time.sleep(0.5)
    turn = 1 - turn

def check_win(board, player):
    for row in board:
        if all(cell == player for cell in row):
            return True
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    
    if all(board[i][j] == player for i in range(3)):
        return True
    if all(board[i][2-i] == player for i in range(3)):
        return True
    return False

if check_win(board, 'X'):
    print("X wins!")
elif check_win(board, '0'):
    print("0 wins!")
else:
    print("it's a draw")