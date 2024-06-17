import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows, selectedUser, deleteUser}) =>{
// instead of typing 'propos', here we typed 'rows'. We call this as object destructuring. We can even type {rows, coloums, ...}
    return(

<TableContainer component={Paper}> 
{/* so that the component/table will float and we can manage it easily in different devices, different sizes */}
<Table>
    <TableHead>
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>NationalID</TableCell>
            <TableCell>PhoneNumber</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>UserName</TableCell>
        </TableRow>
    </TableHead>

    <TableBody>
         {
            rows.length > 0 ?(rows.map(row => (
                <TableRow key={row.id} sx={{'&:last-child td, &last-child th' : {border:0}}}>
                  <TableCell component='th' scope="row">{row.id}</TableCell>
                  <TableCell component='th' scope="row">{row.name}</TableCell>
                  <TableCell component='th' scope="row">{row.email}</TableCell>
                  <TableCell component='th' scope="row">{row.address}</TableCell>
                  <TableCell component='th' scope="row">{row.nationalID}</TableCell>
                  <TableCell component='th' scope="row">{row.phonenumber}</TableCell>
                  <TableCell component='th' scope="row">{row.role}</TableCell>
                  <TableCell>
                    <Button
                    sx={{ margin: '0px 10px'}}
                    onClick={() => selectedUser ({id:row.id, name:row.name, email:row.email, address:row.address, nationalID:row.nationalID, phonenumber:row.phonenumber})}
                    > 
                        Update
                    </Button>
                    <Button
                    sx={{ margin: '0px 10px'}}
                    onClick={() => deleteUser({id:row.id})}
                    >
                        Delete
                    </Button>
                  </TableCell>
                </TableRow>
          
            )))
            : (
                <TableRow sx={{'&:last-child td, &last-child th' : {border:0}}}>
              <TableCell component='th' scope="row">No data</TableCell>
              </TableRow>
            )
         }
    </TableBody>
</Table>
</TableContainer>
    )
}

export default UsersTable;