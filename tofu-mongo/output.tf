output "cosmosdb_connectionstrings" {
   value = azurerm_cosmosdb_account.cosdb.connection_strings
   sensitive   = true
}
