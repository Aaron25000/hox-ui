import { EditIcon } from "../../../hox-icons";
import Button from "../../Button";
import styles from "./DataTable.module.css";


export type EditHandle = (row: Record<string, any>, index: number) => void;

export interface TableHeader {
  key: string;
  name: string;
}

interface DataTableProps {
  headers: TableHeader[];
  data: Record<string, any>[];
  onEdit?: EditHandle;
}

const DataTable = ({ headers, data, onEdit }: DataTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.row}>
          {headers.map((header) => (
            <th key={header.key} className={styles.headerCell}>
              {header.name}
            </th>
          ))}
          {onEdit && (
            <th className={styles.headerCell}></th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.row}>
            {headers.map((header) => (
              <td key={header.key} className={styles.cell}>
                {row[header.key]}
              </td>
            ))}
            {onEdit && (
              <td className={`${styles.cell} ${styles.actionCell}`}>
                <Button
                  varient="ghost"
                  onClick={() => onEdit(row, rowIndex)}
                  className={styles.button}
                >
                  <EditIcon width="18px" height="18px" color="var(--text-secondary)" />
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default DataTable;